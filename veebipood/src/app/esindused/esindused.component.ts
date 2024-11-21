import { Component } from '@angular/core';

@Component({
  selector: 'app-esindused',
  standalone: true,
  imports: [],
  templateUrl: './esindused.component.html',
  styleUrl: './esindused.component.css'
})
export class EsindusedComponent {
  esindused = ["Kristiine", "Ülemiste", "Rocca al mare", "Vesse", "Järveotsa", "Mutamaäe", "Viru keskus", "Solaris"]

  // sorteeri A-Z
  // Sorteeri Z-A
  // Tahed kasvavalt
  // neljas taht A-Z
  // sorteeri sonade arvu jargi

  // Filteeri E-ga loppevad
  // vahemalt 7 tahelised
  // tapselt 9 tahelised
  //'is' luhendit sisaldavad
  // kellel on 4. taht 's'
  // paarisarv tahti sisaldavad
}
