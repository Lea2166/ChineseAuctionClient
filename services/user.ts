import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { SignInDTO, LogInDTO, ResponseUserDTO } from '../models/User';

@Injectable({
  providedIn: 'root',
})

export class UserService {

  private http = inject(HttpClient);
  private readonly apiUrl = 'https://localhost:7156/api/User';


  private _user = signal<ResponseUserDTO | null>(null);
  readonly user = computed(() => this._user());
  readonly token = computed(() => localStorage.getItem('token'));

  setUser(user: ResponseUserDTO) {
    this._user.set(user)
    localStorage.setItem('token', user.token)
  }

  me(token: string): Observable<ResponseUserDTO> {
    return this.http.get<ResponseUserDTO>(`${this.apiUrl}/me`, { headers: { Authorization: "Bearer " + token } }).pipe(
      tap((user: ResponseUserDTO) => this._user.set(user)))
  }

  signIn(userData: SignInDTO): Observable<ResponseUserDTO> {
    return this.http.post<ResponseUserDTO>(`${this.apiUrl}/register`, userData);
  }

  logIn(userData: LogInDTO): Observable<ResponseUserDTO> {
    return this.http.post<ResponseUserDTO>(`${this.apiUrl}/logIn`, userData);
  }

  logOut(): void {
    localStorage.removeItem('token');
    this._user.set(null);
  }


}
