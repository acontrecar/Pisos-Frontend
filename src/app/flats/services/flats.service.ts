import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environments';
import { UserRegister } from '../interfaces';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlatsService {
  private readonly baseUrl: string = environment.baseUrl;

  private http = inject(HttpClient);

  register(body: UserRegister): Observable<boolean> {
    const url = `${this.baseUrl}/api/user/register`;

    return this.http.post<boolean>(url, body);
  }

  login(username: string, password: string): Observable<boolean> {
    const url = `${this.baseUrl}/api/user/login`;
    const body = { username, password };

    return this.http.post<boolean>(url, body);
  }
}
