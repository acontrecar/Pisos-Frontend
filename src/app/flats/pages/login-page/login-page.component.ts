import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { FlatsService } from '../../services/flats.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  private fb = inject(FormBuilder);
  private flatService = inject(FlatsService);

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
      },
      error: (err) => {
        alert(err.error.message);
      },
    });
  }
}
