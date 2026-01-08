import { Component } from '@angular/core';
import { PointerNavComponent } from '../../../shared/pointer-nav/pointer-nav.component';
import { HeaderComponent } from '../../../shared/header/header.component';

@Component({
  selector: 'app-references',
  imports: [PointerNavComponent,HeaderComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {

}
