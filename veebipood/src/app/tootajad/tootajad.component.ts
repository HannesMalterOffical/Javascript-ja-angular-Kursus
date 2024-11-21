import { Component } from '@angular/core';

@Component({
  selector: 'app-tootajad',
  standalone: true,
  imports: [],
  templateUrl: './tootajad.component.html',
  styleUrl: './tootajad.component.css'
})
export class TootajadComponent {
  tootajad = ["Kristiine", "Ülemiste", "Rocca al mare", "Vesse", "Järveotsa", "Mutamaäe", "Viru keskus", "Solaris"]

  // sorteeri A-Z
  // Sorteeri Z-A
  // Tahed kasvavalt
  // neljas taht A-Z
  // sorteeri sonade arvu jargi

  // Filteeri ??-ga loppevad
  // vahemalt ?? tahelised
  // tapselt ?? tahelised
  //'??' luhendit sisaldavad
  // kellel on ??. taht '??'
  // paarisarv tahti sisaldavad
}
