import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent {
  public showPassword: boolean | undefined;
  public showPasswordOnPress: boolean | undefined;
  loginForm: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      
      this.http.post('http://your-backend-api.com/login', formData).subscribe({
        next: (response: any) => {
          // Handle successful login (e.g., navigate to dashboard)
          console.log('Login successful:', response);
          this.router.navigate(['/dashboard']); // Redirect to a dashboard page
        },
        error: (error) => {
          // Handle login error (e.g., show error message)
          console.error('Login failed:', error);
          alert('Login failed, please check your credentials');
        }
      });
    }
  }
}
