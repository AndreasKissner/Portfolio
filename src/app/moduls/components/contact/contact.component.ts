import { Component } from '@angular/core';
import { PointerNavComponent } from '../../../shared/pointer-nav/pointer-nav.component';
import { HeaderComponent } from '../../../shared/header/header.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../../shared/footer/footer.component';


@Component({
  selector: 'app-contact',
  imports: [PointerNavComponent, HeaderComponent, FooterComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {

}
