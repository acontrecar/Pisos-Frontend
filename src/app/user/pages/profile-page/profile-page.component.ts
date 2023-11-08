import { Component, OnInit, inject, signal } from '@angular/core';
import { User } from 'src/app/flats/interfaces';
import { FlatsService } from 'src/app/flats/services/flats.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  private flatService = inject(FlatsService);
  private user = signal<User | null>(null);

  ngOnInit(): void {
    this.user.set(this.flatService.currentUser());
    console.log(this.user());
  }
}
