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
  secret = 'aUY3pgIfTn9AdYoqpoVgP44LOI5GBO8IEjbBjDEx';
  isNewUser = false;
  isDetectingNewUser = false;
  timeLeft = 60;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.fetchBridgeIp().subscribe(data => {
      this.authService.bridgeIp = data;

      if(this.authService.getUser()) {
        this.isNewUser = true;
      }
    });
  }

  public detectNewUser(): void {
    this.isDetectingNewUser = true;

    const interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(interval);
      }
    }, 1000)



    this.authService.fetchNewUser().subscribe(data => {
      this.authService.setUser(data[0].success.username);
    })
  }

  public turnLightOn(turnOn: boolean) {
    this.http.put(
      `http://${this.authService.bridgeIp}/api/${this.secret}/lights/5/state`, { on: turnOn }
    ).subscribe(data => {
      console.log(data);
    });
  }
}
