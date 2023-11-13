import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  public isNotCorrectUser = false;

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  public myForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  login() {
    const { username, password } = this.myForm.value;

    if (this.myForm.invalid) {
      return;
    }

    this.authService.login(username, password).subscribe({
      next: () => {
        alert('Success!');
        this.router.navigate(['/flat']);
      },
      error: (err) => {
        alert(err.error.message);
        this.isNotCorrectUser = true;
      },
    });
  }
}
