import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

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
