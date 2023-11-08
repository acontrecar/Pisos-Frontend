import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  private router = inject(Router);

  navigate() {
    this.router.navigate(['/flat/profile']);
  }
}
