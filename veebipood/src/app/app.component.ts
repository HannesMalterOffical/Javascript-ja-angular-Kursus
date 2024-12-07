import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateModule} from "@ngx-translate/core";
import {TranslateService} from "@ngx-translate/core";
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'veebipood';
  isDarkMode = localStorage.getItem('dark-mode') === 'true';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['ee', 'en']);
    if (this.translate.getLangs().includes(localStorage.getItem("language") || "")) {
      this.translate.setDefaultLang(localStorage.getItem("language") ||"en");
    } else {
      this.translate.setDefaultLang("en");
      localStorage.setItem("language", "en");
    }
    // this.translate.setDefaultLang(localStorage.getItem("language") ||"en");
    // this.translate.use('en');
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem("language", language);
  }

  setDarkMode(isDark: boolean) {
    this.isDarkMode = isDark;
    localStorage.setItem("dark-mode", String(isDark));
  }

}


// ngform 
// kogus ostukorvis --> keeruline -->objekt objektiks 
// subject - ostukorvi summa Navbari 
// URL parameeter 
// alamkomponendid ja andmete saatmine. dark mode korda teha 
// pipe 
// directives HTML-atribuut class="" disabled 
// kaardirakendus - leaflet / Google maps 
// E-maili saatmised
// Api paringud -> tarnija tooted  
// pakiautomaadid omniva 
// makse 
// andmebaas - firebase 
// Autentimine -> sisselogimine/registeerumine Friebase


// Mobiilrakendused
// Back-end -> Spring/Java

// L 7.12
// T 10.12
// R 13.12

 // KOKKU 15 kohtumist