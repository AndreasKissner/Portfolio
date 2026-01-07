import { Component } from '@angular/core';

import { HeroHeaderSocialComponent } from './hero-header-social/hero-header-social.component';
import { LanguageMenueComponent } from '../../../../shared/language-nav/language-menue/language-menue.component';
import { HeroHeaderNavComponent } from '../../../../shared/language-nav/hero-header-nav/hero-header-nav.component';

@Component({
  selector: 'app-hero-header',
  imports: [
    HeroHeaderSocialComponent, LanguageMenueComponent,HeroHeaderNavComponent],
  templateUrl: './hero-header.component.html',
  styleUrl: './hero-header.component.scss',
})
export class HeroHeaderComponent {

}
