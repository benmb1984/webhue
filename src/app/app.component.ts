import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  bridgeIp!: string;
  secret = 'aUY3pgIfTn9AdYoqpoVgP44LOI5GBO8IEjbBjDEx';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.getBridgeIp().subscribe(data => {
      this.bridgeIp = data[0].internalipaddress;
      console.log(this.bridgeIp);
    });

  }

  public turnLightOn(turnOn: boolean) {
    this.http.put(
      `http://${this.bridgeIp}/api/${this.secret}/lights/5/state`, { on: turnOn }
    ).subscribe(data => {
      console.log(data);
    });
  }
}
