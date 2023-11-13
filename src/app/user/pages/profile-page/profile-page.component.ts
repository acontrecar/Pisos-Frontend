import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  computed,
  inject,
  signal,
} from '@angular/core';
import { User } from 'src/app/flats/interfaces';
import { AuthService } from 'src/app/flats/services/auth.service';
import { UserService } from '../../services/user.service';
import { UserComplete } from '../../interfaces/user-complete.interfaces';
import { Router } from '@angular/router';
import { ImageResponse, NameResponse } from '../../interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent {
  private userService = inject(UserService);
  public user = computed(() => this.userService.currentUser());
  public isNotCorrectName = false;
  public isCorrectName = false;

  private fb = inject(FormBuilder);

  public myForm: FormGroup = this.fb.group({
    name: [
      this.user()?.name,
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
  });

  onFileChange(event: any) {
    const image: File = event.target.files[0];
    this.userService.updateImage(image).subscribe({
      next: (res: ImageResponse) => {
        console.log(res);
        this.userService.updateUserImage(res.image);
      },

      error: (err) => {
        console.log(err.error.message);
      },
    });
  }

  logOut() {
    this.userService.logOut().subscribe({
      next: (res) => {
        console.log(res);
      },

      error: (err) => {
        console.log(err.error.message);
      },
    });
  }

  onSubmit() {
    const { name } = this.myForm.value;

    if (this.myForm.invalid) {
      this.isNotCorrectName = true;
      return;
    }

    this.userService.updateName(name).subscribe({
      next: (res: NameResponse) => {
        console.log(res);
        this.userService.updateUserName(res.name);
        this.isCorrectName = true;
      },

      error: (err) => {
        console.log(err.error.message);
      },
    });
  }
}
