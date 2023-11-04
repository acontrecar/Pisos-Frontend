import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlatsRoutingModule } from './flats-routing.module';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeImageComponent } from './components/home-image/home-image.component';

@NgModule({
  declarations: [
    HomeLayoutComponent,
    NavbarComponent,
    FooterComponent,
    RegisterPageComponent,
    LoginPageComponent,
    HomePageComponent,
    HomeImageComponent,
  ],
  imports: [CommonModule, FlatsRoutingModule, ReactiveFormsModule],
})
export class FlatsModule {}
