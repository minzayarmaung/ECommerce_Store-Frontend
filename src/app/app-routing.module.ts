import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { SignupComponentComponent } from './components/signup-component/signup-component.component';
import { LayoutComponent } from './components/layout/layout.component';
import { UserListComponent } from './components/user-component/user-list/user-list.component';
import { InvoicelistComponent } from './components/api/invoicelist/invoicelist.component';
import { UserlistComponent } from './components/api/userlist/userlist.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent},
      { path: 'alluserlist', component: UserListComponent },
      { path: 'login', component: LoginComponentComponent },
      { path: 'signup', component: SignupComponentComponent },
      
    ],
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'invoicelist', component: InvoicelistComponent },
  { path: 'userlist', component: UserlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}