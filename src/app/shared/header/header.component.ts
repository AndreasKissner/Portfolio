import { Component } from '@angular/core';



import { HeaderSocialBtnComponent } from './header-social-btn/header-social-btn.component';

import { LanguageMenueComponent } from './language-nav/language-menue/language-menue.component';
import { HeroHeaderNavComponent } from './language-nav/hero-header-nav/hero-header-nav.component';
import { LogoNameComponent } from './logo-name/logo-name.component';

@Component({
  selector: 'app-header',
  imports: [ HeaderSocialBtnComponent
  , LanguageMenueComponent,  HeroHeaderNavComponent, LogoNameComponent  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

}
