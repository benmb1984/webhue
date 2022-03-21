import { Component, OnInit } from '@angular/core';
import { UserService, UserState } from './../../services/user/user.service';

@Component({
  selector: 'app-access-request',
  templateUrl: './access-request.component.html'
})
export class AccessRequestComponent implements OnInit {
  public userState!: UserState;
  secondsToClickonBridge = 60;

  constructor(
    private UserService: UserService,
  ) { }

  ngOnInit(): void {
  }

  public detectNewUser(): void {
    this.userState = UserState.hasToClickOnBridge

    const interval = setInterval(() => {
      if(this.secondsToClickonBridge > 0) {
        this.secondsToClickonBridge--;
      } else {
        clearInterval(interval);
        this.userState = UserState.hasNotClickedOnBridge;
      }
    }, 1000);

    this.UserService.fetchNewUser().subscribe(data => {
      this.UserService.setUser(data[0].success.username);
    })
  }

}
