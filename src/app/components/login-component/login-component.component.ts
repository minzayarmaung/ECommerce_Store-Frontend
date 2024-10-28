import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent {
  public showPassword: boolean | undefined;
  public showPasswordOnPress: boolean | undefined;
  loginForm: any;

  private url = 'http://localhost:8080/auth/signin';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      
      this.http.post(this.url, formData).subscribe({
        next: (response: any) => {
          console.log('Login successful:', response);
          this.router.navigate(['/']); 
        },
        error: (error) => {
          console.error('Login failed:', error);
          alert('Login failed, please check your credentials');
        }
      });
    }
  }
}
