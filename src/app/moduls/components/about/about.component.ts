import { Component } from '@angular/core';
import { PointerNavComponent } from '../../../shared/pointer-nav/pointer-nav.component';
import { HeaderComponent } from '../../../shared/header/header.component';

@Component({
  selector: 'app-about',
  imports: [PointerNavComponent, HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {

}
