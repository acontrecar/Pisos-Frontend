import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environments';
import {
  AuthStatus,
  CheckTokenResponse,
  LoginResponse,
  User,
  UserRegister,
} from '../interfaces';
import { Observable, catchError, map, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl: string = environment.baseUrl;
  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);
  private http = inject(HttpClient);
  public cookieService = inject(CookieService);

  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());

  constructor() {
    this.checkAuthStatus().subscribe();
  }

  public setAuthentication(user: User, token?: string): boolean {
    this._currentUser.set(user);
    this._authStatus.set(AuthStatus.authenticated);
    return true;
  }

  register(body: UserRegister): Observable<boolean> {
    const url = `${this.baseUrl}/api/user/register`;

    return this.http.post<boolean>(url, body);
  }

  login(username: string, password: string): Observable<boolean> {
    const url = `${this.baseUrl}/api/user/login`;
    const body = { username, password };

    return this.http
      .post<LoginResponse>(url, body, { withCredentials: true })
      .pipe(
        map(
          ({ userFound, token }) => this.setAuthentication(userFound, token)
          // catchError((err) => err.error.message)
        )
      );
  }

  checkAuthStatus(): Observable<boolean> {
    const url = `${this.baseUrl}/api/user/check-token`;

    return this.http
      .get<CheckTokenResponse>(url, { withCredentials: true })
      .pipe(
        map(({ user, token }) => this.setAuthentication(user, token)),

        catchError((err) => {
          this._authStatus.set(AuthStatus.notAuthenticated);
          this._currentUser.set(null);
          return of(false);
        })
      );
  }
}
