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


//* +ngform 
//* +kogus ostukorvis --> keeruline --> objekt objektiks 
//* +subject - ostukorvi summa Navbari 
//* +E-maili saatmised
// todo Api paringud -> tarnija tooted  
// todo                 pakiautomaadid omniva 
// todo                 makse 
//* https://fakestoreapi.com/products KOJU
//todo https://www.freetestapi.com/api/v1/books KOJU
//? https://www.freetestapi.com/api/v1/countries KOJU -> ng g c admin/api/countries
//* 2. https://restcountries.com/v3.1/all?fields=name KOOS -> ng g c admin/api/restcountries
//todo https://marineregions.org/rest/getGazetteerTypes.json KOJU -> ng g c admin/api/dictionary
//* 1. https://api.escuelajs.co/api/v1/products KOOS

//! https://dashboard.elering.ee/api/nps/price KOOS
//* https://environment.data.gov.uk/flood-monitoring/id/floods KOOS
//? https://api.itbook.store/1.0/search/angular 
//? https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/record
//* todo kaardirakendus - leaflet / Google maps 
//* todo URL parameeter 
//* todo Reactive form 
// todo pipe 
// todo andmebaas - firebase 
// todo alamkomponendid ja andmete saatmine. dark mode korda teha 
// todo directives HTML-atribuut class="" disabled 
// todo Autentimine -> sisselogimine/registeerumine Friebase


// Mobiilrakendused
// Back-end -> Spring/Java

// E 16.12
// R 19.12

 // KOKKU 15 kohtumist