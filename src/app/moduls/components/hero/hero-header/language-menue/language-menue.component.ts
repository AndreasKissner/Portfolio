import { Component } from '@angular/core';

@Component({
  selector: 'app-language-menue',
  imports: [],
  templateUrl: './language-menue.component.html',
  styleUrl: './language-menue.component.scss',
})
export class LanguageMenueComponent {
// In deiner Komponente
isGerman = true; // Startzustand

toggleLanguage() {
  this.isGerman = !this.isGerman;
}
}
