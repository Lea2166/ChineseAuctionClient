import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignInDTO, LogInDTO, ResponseUserDTO } from '../models/user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'https://localhost:7156/api/User';

  signIn(userData: SignInDTO): Observable<ResponseUserDTO> {
    return this.http.post<ResponseUserDTO>(`${this.apiUrl}/register`, userData);
  }

  logIn(credentials: LogInDTO): Observable<ResponseUserDTO> {
    return this.http.post<ResponseUserDTO>(`${this.apiUrl}/logIn`, credentials);
  }
}
