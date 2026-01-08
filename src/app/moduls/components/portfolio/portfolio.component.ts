import { Component } from '@angular/core';
import { PointerNavComponent } from '../../../shared/pointer-nav/pointer-nav.component';
import { HeaderComponent } from '../../../shared/header/header.component';

@Component({
  selector: 'app-portfolio',
  imports: [PointerNavComponent, HeaderComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {

}
