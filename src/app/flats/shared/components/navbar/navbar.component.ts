import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public toggle: boolean = false;

  public toggleMenu(): void {
    this.toggle = !this.toggle;
  }
}
