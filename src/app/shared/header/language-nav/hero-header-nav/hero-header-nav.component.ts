import { Component } from '@angular/core';
import { HeaderSocialBtnComponent } from '../../header-social-btn/header-social-btn.component';


@Component({
  selector: 'app-hero-header-nav',
  imports: [HeaderSocialBtnComponent],
  templateUrl: './hero-header-nav.component.html',
  styleUrl: './hero-header-nav.component.scss',
})
export class HeroHeaderNavComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Diese Methode fehlte noch, damit die (click)="onClose()" Aufrufe funktionieren
  onClose() {
    this.isMenuOpen = false;
  }

  openMenue() {
    console.log("Menu state changed to:", this.isMenuOpen);
  }
}