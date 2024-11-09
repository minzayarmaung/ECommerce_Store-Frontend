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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './components/layout/layout.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponentComponent,
    SignupComponentComponent,
    ForgotpasswordComponentComponent,
    UserListComponent,
    LayoutComponent,
    TopbarComponent,
    DashboardComponent,


  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
