import { Component, inject, OnInit } from '@angular/core'; // signal importiert
import { PointerNavComponent } from '../../../shared/pointer-nav/pointer-nav.component';
import { PrimaerBtnComponent } from '../../../shared/primaer-btn/primaer-btn.component';
import { ProfilImageContainerComponent } from './profil-image-container/profil-image-container.component';
import { DisplayTextService } from '../../../allServices/display-text-service';
import { HeaderComponent } from '../../../shared/header/header.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ PointerNavComponent, HeaderComponent, PrimaerBtnComponent, ProfilImageContainerComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {

//STart Servicer Inject DisplayText
  //Mega Wichtig für service
  public textService = inject(DisplayTextService);
ngOnInit() {
    // 2. Wir starten den Effekt manuell, da ngOnInit in Services 
    // oft nicht automatisch von Angular aufgerufen wird
    this.textService.typeEffect();
  }//End Display tesxt Service

}