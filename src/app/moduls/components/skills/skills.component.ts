import { Component } from '@angular/core';
import { PointerNavComponent } from '../../../shared/pointer-nav/pointer-nav.component';
import { HeaderComponent } from '../../../shared/header/header.component';

@Component({
  selector: 'app-skills',
  imports: [PointerNavComponent,HeaderComponent, PointerNavComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {

}
