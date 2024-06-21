import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css'],
})
export class SignupComponentComponent {
  showPassword = false;
  showConfirmPassword = false;
  password: string = '';
  confirmPassword: string = '';
  passwordsDoNotMatch: boolean = false;

  checkPasswords() {
    this.passwordsDoNotMatch = this.password !== this.confirmPassword;
  }
}
