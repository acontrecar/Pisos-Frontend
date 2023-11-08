import { Component, computed, effect, inject } from '@angular/core';
import { FlatsService } from './flats/services/flats.service';
import { AuthStatus } from './flats/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private flatService = inject(FlatsService);
  private router = inject(Router);

  public finishedAuthCheck = computed<boolean>(() => {
    if (this.flatService.authStatus() === AuthStatus.checking) {
      return false;
    }

    return true;
  });

  public authStatusChangeEffect = effect(() => {
    switch (this.flatService.authStatus()) {
      case AuthStatus.checking:
        console.log('Checking authentication status');
        return;
      case AuthStatus.authenticated:
        console.log('User is authenticated');
        this.router.navigate(['/flat']);
        return;
      case AuthStatus.notAuthenticated:
        this.router.navigate(['/']);
        return;
    }
  });
}
