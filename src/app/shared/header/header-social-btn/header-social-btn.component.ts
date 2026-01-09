import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header-social-btn',
  imports: [],
  templateUrl: './header-social-btn.component.html',
  styleUrl: './header-social-btn.component.scss',
})
export class HeaderSocialBtnComponent {
// Signals für den Hover-Zustand
  gitHover = signal(false);
  linkedInHover = signal(false);
  mailHover = signal(false);
}
