import type { Observable } from 'rxjs';

export declare const APP_PACKAGE: 'app.v1';
export declare const APP_SERVICE_NAME: 'AppService';
export declare const APP_PROTO_PATH: string;

export interface HealthRequest {
  service: string;
}

export interface HealthResponse {
  status: string;
  timestamp: string;
  pid: number;
  service: string;
}

export interface AppServiceClient {
  getHealth(request: HealthRequest): Observable<HealthResponse>;
}
