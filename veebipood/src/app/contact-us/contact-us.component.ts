import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { RatingModule } from 'primeng/rating';


@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [RatingModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
value = 4;	

   sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_wc96hpe', 'template_5rlexc9', e.target as HTMLFormElement, {
        publicKey: 'J3RMFKODegKdwidnB',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
