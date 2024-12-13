import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, TranslatePipe], // Kui on eriasi HTMLs, siis pean siin importima selle
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  
  login(loginForm: NgForm) {
    console.log(loginForm);
    console.log(loginForm.value);
  }

}
