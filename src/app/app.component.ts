import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService, UserState } from './services/user/user.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  secret = 'aUY3pgIfTn9AdYoqpoVgP44LOI5GBO8IEjbBjDExa';
  isRequestingAccess = false;
  public bridge$!: Observable<any>;

  constructor(
    private http: HttpClient,
    private UserService: UserService,
  ) {}

  ngOnInit(): void {
    this.UserService.fetchBridgeIp().subscribe(data => {
      this.UserService.bridgeIp = data;
      this.bridge$ = this.http.get(`${this.UserService.bridgeIp}/api/${this.secret}`).pipe(
        tap((data=> {
          console.log(data.error);
        }))
      );

      // if(!this.UserService.getUser()) {
      //   this.isRequestingAccess = true;
      //   //this.userState = UserState.hasNoAccess;
      // }
    });
  }

  // public turnLightOn(turnOn: boolean) {
  //   this.http.put(
  //     `http://${this.UserService.bridgeIp}/api/${this.secret}/lights/5/state`, { on: turnOn }
  //   ).subscribe(data => {
  //     console.log(data);
  //   });
  // }
}
