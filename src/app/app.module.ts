import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user/user.service';
import { ModalComponent } from './components/modal/modal.component';
import { AccessRequestComponent } from './components/access-request/access-request.component';

@NgModule({
  declarations: [
    AccessRequestComponent,
    AppComponent,
    ModalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
