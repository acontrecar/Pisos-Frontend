import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { FlatsService } from '../../services/flats.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  private fb = inject(FormBuilder);
  private flatService = inject(FlatsService);
  private router = inject(Router);

  public myForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
      ],
    ],
    confirmPassword: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
      ],
    ],
  });

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return '';

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'This field is required';

        case 'minlength':
          return `Min ${errors['minlength'].requiredLength} characters`;

        case 'maxlength':
          return `Max ${errors['maxlength'].requiredLength} characters`;

        case 'email':
          return 'Invalid email';

        case 'pattern':
          return 'Password must contain at least one letter, one number and one capital letter';

        default:
          break;
      }
    }

    return 'Hola mundo';
  }

  isValidField(field: string): boolean | undefined {
    const fieldControl = this.myForm.get(field);
    return fieldControl?.touched && fieldControl?.invalid;
  }

  register(): void {
    const data = this.myForm.value;

    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    if (data.password !== data.confirmPassword) {
      return;
    }

    this.flatService.register(data).subscribe({
      next: () => {
        alert('Success!');
        this.router.navigateByUrl('/');
      },
      error: (err) => {
        alert(err.error.message);
      },
    });
  }
}
