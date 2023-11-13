import { Component, OnInit, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  private router = inject(Router);
  private userService = inject(UserService);
  public user = computed(() => this.userService.currentUser());

  ngOnInit(): void {
    console.log(this.user());
  }

  navigate() {
    this.router.navigate(['/flat/profile']);
  }
}
