import type { Observable } from 'rxjs';

export declare const APP_PACKAGE: 'app.v1';
export declare const APP_SERVICE_NAME: 'AppService';
export declare const APP_PROTO_PATH: string;

export declare const USER_PACKAGE: 'user.v1';
export declare const USER_SERVICE_NAME: 'UserService';
export declare const USER_PROTO_PATH: string;

export declare const AUTH_PACKAGE: 'auth.v1';
export declare const AUTH_SERVICE_NAME: 'AuthService';
export declare const AUTH_PROTO_PATH: string;

export type HealthRequest = {
  service: string;
};

export type HealthResponse = {
  status: string;
  timestamp: string;
  pid: number;
  service: string;
};

export type AppServiceClient = {
  getHealth(request: HealthRequest): Observable<HealthResponse>;
};

export type CreateUserRequest = {
  email: string;
  password: string;
};

export type GetUserByEmailRequest = {
  email: string;
};

export type ValidateCredentialsRequest = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  email: string;
  createdAt: string;
};

export type ValidateCredentialsResponse = {
  valid: boolean;
  user?: User;
};

export type UserServiceClient = {
  createUser(request: CreateUserRequest): Observable<User>;
  getUserByEmail(request: GetUserByEmailRequest): Observable<User>;
  validateCredentials(
    request: ValidateCredentialsRequest,
  ): Observable<ValidateCredentialsResponse>;
};

export type RegisterRequest = {
  email: string;
  password: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type UserInfo = {
  id: string;
  email: string;
};

export type AuthResponse = {
  accessToken: string;
  user: UserInfo;
};

export type AuthServiceClient = {
  register(request: RegisterRequest): Observable<AuthResponse>;
  login(request: LoginRequest): Observable<AuthResponse>;
};
