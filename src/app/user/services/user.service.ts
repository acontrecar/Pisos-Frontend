import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environments';
import { AuthService } from 'src/app/flats/services/auth.service';
import { Image, UserComplete } from '../interfaces/user-complete.interfaces';
import { User } from 'src/app/flats/interfaces';
import { ImageResponse, NameResponse, Users } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);
  private authService = inject(AuthService);

  public _user = signal<UserComplete | null>(null);

  constructor() {
    this._user.set(this.authService.currentUser() as UserComplete);
  }

  public currentUser = computed(() => this._user());

  public updateImage(image: File): Observable<ImageResponse> {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.patch<ImageResponse>(
      `${this.baseUrl}/api/user/updateImage`,
      formData,
      {
        withCredentials: true,
      }
    );
  }

  public updateUserImage(image: Image): void {
    this._user.mutate((user) => {
      if (user) {
        user.image = image;
      }
      return user;
    });
  }

  public logOut(): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/api/user/logout`, {
      withCredentials: true,
    });
  }

  public updateName(name: string): Observable<NameResponse> {
    return this.http.patch<NameResponse>(
      `${this.baseUrl}/api/user/updateName`,
      { name },
      {
        withCredentials: true,
      }
    );
  }

  public updateUserName(name: string): void {
    this._user.mutate((user) => {
      if (user) {
        user.name = name;
      }
      return user;
    });
  }

  public getUsers(): Observable<Users> {
    return this.http.get<Users>(`${this.baseUrl}/api/user/getAllUsers`, {
      withCredentials: true,
    });
  }
}
