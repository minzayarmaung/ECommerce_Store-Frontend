import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { ForgotpasswordComponentComponent } from './components/forgotpassword-component/forgotpassword-component.component';
import { SignupComponentComponent } from './components/signup-component/signup-component.component';
import { UserListComponent } from './components/user-component/user-list/user-list.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  { 
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent }, 
      { path: 'login', component: LoginComponentComponent },
      { path: 'alluserlist', component: UserListComponent },
      { path: 'signup', component: SignupComponentComponent }
    ]
  },
  { path: '', redirectTo: '/', pathMatch: 'full' } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
