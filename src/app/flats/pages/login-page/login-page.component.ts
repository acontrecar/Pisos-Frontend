import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { FlatsService } from '../../services/flats.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  public isNotCorrectUser = false;

  private fb = inject(FormBuilder);
  private flatService = inject(FlatsService);
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

    this.flatService.login(username, password).subscribe({
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
