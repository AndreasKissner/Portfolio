import { Component, inject } from '@angular/core';
import { HeroComponent } from '../../moduls/components/hero/hero.component';
import { AboutComponent } from '../../moduls/components/about/about.component';
import { SkillsComponent } from '../../moduls/components/skills/skills.component';
import { PortfolioComponent } from '../../moduls/components/portfolio/portfolio.component';
import { ReferencesComponent } from '../../moduls/components/references/references.component';
import { ContactComponent } from '../../moduls/components/contact/contact.component';
import { FooterComponent } from '../../moduls/components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { ScrollService } from '../../allServices/scroll-service';

@Component({
  selector: 'app-home',
  imports: [HeroComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ReferencesComponent,
    ContactComponent,
    FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
private scrollService = inject(ScrollService);
ngAfterViewInit() {
    this.scrollService.resetScroll();
  }
}
