import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, TranslatePipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profileForm!: FormGroup; // hüüumark ---> alguses vaartus ei anna

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      email: new FormControl("@gmail.com", [Validators.required, Validators.email]),
      parool: new FormControl("", [Validators.required]),
      eesNimi: new FormControl(""),
      pereNimi: new FormControl("")
    })
  }

  changeProfile() {
    console.log(this.profileForm.value);
  }
}
