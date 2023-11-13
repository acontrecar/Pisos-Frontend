import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { PagesPageComponent } from './pages/pages-page/pages-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { BlogsPageComponent } from './pages/blogs-page/blogs-page.component';
import { FriendsPageComponent } from './pages/friends-page/friends-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'pages',
        component: PagesPageComponent,
      },
      {
        path: 'profile',
        component: ProfilePageComponent,
      },
      {
        path: 'blogs',
        component: BlogsPageComponent,
      },
      {
        path: 'friends',
        component: FriendsPageComponent,
      },
      {
        path: '**',
        redirectTo: 'friends',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
