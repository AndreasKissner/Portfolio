import { AfterViewInit, Component, inject } from '@angular/core';
import { HeroComponent } from '../../moduls/components/hero/hero.component';
import { AboutComponent } from '../../moduls/components/about/about.component';
import { SkillsComponent } from '../../moduls/components/skills/skills.component';
import { PortfolioComponent } from '../../moduls/components/portfolio/portfolio.component';
import { ReferencesComponent } from '../../moduls/components/references/references.component';
import { ContactComponent } from '../../moduls/components/contact/contact.component';
import { ScrollService } from '../../allServices/scroll-service';
import { ScrollObserverService } from '../../allServices/scroll-observer.service';

@Component({
  selector: 'app-home',
  imports: [HeroComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ReferencesComponent,
    ContactComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
private scrollService = inject(ScrollService);

//Start new Scroll pointer
// 1. Den neuen Service injizieren
  private observerService = inject(ScrollObserverService);

// 2. Die Liste der IDs, die beobachtet werden sollen
  sections = ['hero', 'about', 'skills', 'portfolio', 'references', 'contact'];

ngAfterViewInit() {
    this.scrollService.resetScroll();
    // Nur dieser eine Aufruf startet die ganze Logik im Service
   this.observerService.init(this.sections);
//End Scroll Pointer Logik
  }
}
