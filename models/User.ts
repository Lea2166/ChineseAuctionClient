export interface SignInDTO {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
}

export interface LogInDTO {
  email?: string;
  password?: string;
}

export interface ResponseUserDTO {
  id: number;
  email?: string;
  name: string;
  role: "User" | "Admin";
  token: string;
}

export interface ReadUserDTO {
  id: number;
  email?: string;
  name: string;
}