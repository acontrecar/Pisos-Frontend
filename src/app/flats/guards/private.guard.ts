import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FlatsService } from '../services/flats.service';
import { AuthStatus } from '../interfaces';

export const PrivatedGuard: CanActivateFn = (route, state) => {
  const flatService = inject(FlatsService);
  const router = inject(Router);

  if (flatService.authStatus() === AuthStatus.authenticated) {
    return true;
  }

  router.navigate(['/']);
  return false;
};
