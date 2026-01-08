import { Component, inject,  } from '@angular/core';
import { ScrollObserverService } from '../../allServices/scroll-observer.service';

@Component({
  selector: 'app-pointer-nav',
  imports: [],
  templateUrl: './pointer-nav.component.html',
  styleUrl: './pointer-nav.component.scss',
})
export class PointerNavComponent {

  // Pointer Scroll start
// Mit @Input sagen wir: "Dieser Wert kommt von der HomeComponent"
  public observerService = inject(ScrollObserverService);
  // Pointer Scroll End
}
