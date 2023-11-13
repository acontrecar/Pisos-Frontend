import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PagesPageComponent } from './pages/pages-page/pages-page.component';
import { BlogsPageComponent } from './pages/blogs-page/blogs-page.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { DebtsPageComponent } from './pages/debts-page/debts-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FriendsPageComponent } from './pages/friends-page/friends-page.component';

@NgModule({
  declarations: [
    HomeLayoutComponent,
    NavbarComponent,
    FooterComponent,
    PagesPageComponent,
    BlogsPageComponent,
    TasksPageComponent,
    DebtsPageComponent,
    ProfileComponent,
    ProfilePageComponent,
    FriendsPageComponent,
  ],
  imports: [CommonModule, UserRoutingModule, ReactiveFormsModule],
})
export class UserModule {}
