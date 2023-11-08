import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FlatsService } from '../services/flats.service';
import { AuthStatus } from '../interfaces';

export const PublicGuard: CanActivateFn = (route, state) => {
  const flatService = inject(FlatsService);
  const router = inject(Router);

  if (flatService.authStatus() === AuthStatus.authenticated) {
    router.navigate(['/flat']);
    return false;
  }
  return true;
};
