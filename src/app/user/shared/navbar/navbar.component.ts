import { Component, OnInit, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public navbarItems = [
    {
      label: 'Debts',
      url: './list',
    },
    {
      label: 'Tasks',
      url: './tasks',
    },
    {
      label: 'Blogs',
      url: './blogs',
    },
    {
      label: 'Page',
      url: './pages',
    },
    {
      label: 'Friends',
      url: './friends',
    },
  ];

  private router = inject(Router);
  public toggle: boolean = false;

  public toggleMenu(): void {
    this.toggle = !this.toggle;
  }

  navigate() {
    this.router.navigate(['./flat']);
  }
}
