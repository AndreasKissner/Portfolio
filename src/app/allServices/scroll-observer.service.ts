import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollObserverService {
  // Das Signal speichert, welche Sektion gerade aktiv ist.
  // Standardmäßig fangen wir bei 'hero' an.
  activeSection = signal<string>('hero');

  // Diese Funktion startet später die Beobachtung der Sektionen
  init(sectionIds: string[]) {
    const options = {
      root: null,
      threshold: 0.6 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Hier wird der Name der sichtbaren Sektion im Signal gespeichert
          this.activeSection.set(entry.target.id);
        }
      });
    }, options);

    // Wir sagen dem Observer, welche IDs er überwachen soll
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }

  scrollTo(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
}