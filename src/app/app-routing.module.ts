import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivatedGuard, PublicGuard } from './flats/guards';

const routes: Routes = [
  {
    path: '',
    canActivate: [PublicGuard],
    loadChildren: () =>
      import('./flats/flats.module').then((m) => m.FlatsModule),
  },
  {
    path: 'flat',
    canActivate: [PrivatedGuard],
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
