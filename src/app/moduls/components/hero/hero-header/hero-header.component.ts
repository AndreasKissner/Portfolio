import { Component } from '@angular/core';
import { LanguageMenueComponent } from './language-menue/language-menue.component';
import { HeroHeaderNavComponent } from './hero-header-nav/hero-header-nav.component';
import { HeroHeaderSocialComponent } from './hero-header-social/hero-header-social.component';

@Component({
  selector: 'app-hero-header',
  imports: [LanguageMenueComponent,HeroHeaderNavComponent,HeroHeaderSocialComponent],
  templateUrl: './hero-header.component.html',
  styleUrl: './hero-header.component.scss',
})
export class HeroHeaderComponent {

}
