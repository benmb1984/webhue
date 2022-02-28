import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BridgeIp } from './auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public apiUrl!: string;
  public bridgeIp!: string;

  constructor(
    private http: HttpClient
  ) { }

  fetchBridgeIp(): Observable<string> {
    return this.http.get<BridgeIp[]>('https://discovery.meethue.com').pipe(
      map(result => `http://${result[0].internalipaddress}`));
  }

  fetchNewUser(): Observable<any> {
    const date = new Date().toISOString();
    return this.http.post(`${this.bridgeIp}/api`, { devicetype: 'webhue' + date });
  }

  setUser(userName: string): void {
    localStorage.setItem('localUser', userName);
  }

  getUser(): string | null {
    return localStorage.getItem('localUser') ;
  }

  setApiUrl(): void {
    this.apiUrl = '123';
  }
}
