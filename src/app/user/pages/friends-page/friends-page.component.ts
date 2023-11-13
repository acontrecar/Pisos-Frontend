import { Component, OnInit, inject, signal } from '@angular/core';
import { UserComplete, Users } from '../../interfaces';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/flats/interfaces';
import { map } from 'rxjs';

@Component({
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.scss'],
})
export class FriendsPageComponent implements OnInit {
  public users = signal<Users>({ users: [] });
  private userService = inject(UserService);

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: Users) => {
      this.users.set(users);
    });
  }

  onKeyUp(searchterm: string): void {
    if (!searchterm) {
      return;
    }

    this.users.mutate((users) => {
      if (users) {
        users.users = users.users.filter((user) => {
          return user.name.toLowerCase().includes(searchterm.toLowerCase());
        });
      }
      return users;
    });
  }
}
