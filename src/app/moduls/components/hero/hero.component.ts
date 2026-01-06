import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroHeaderComponent } from './hero-header/hero-header.component';

@Component({
  selector: 'app-hero',
  imports: [HeroHeaderComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {

}
