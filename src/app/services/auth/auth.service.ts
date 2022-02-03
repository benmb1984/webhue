import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BridgeIp } from './auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient
  ) { }

  getBridgeIp(): Observable<BridgeIp[]> {
    return this.http.get<BridgeIp[]>('https://discovery.meethue.com');
  }
}
