import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { SignupComponentComponent } from './components/signup-component/signup-component.component';
import { ForgotpasswordComponentComponent } from './components/forgotpassword-component/forgotpassword-component.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './components/user-component/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponentComponent,
    SignupComponentComponent,
    ForgotpasswordComponentComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
