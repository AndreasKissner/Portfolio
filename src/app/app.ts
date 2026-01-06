import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { startTabRotation } from './favicon-logic'; // Import der Logik

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private titleService = inject(Title);

  ngOnInit() {
    // Einfach die ausgelagerte Funktion aufrufen
    startTabRotation(this.titleService);
  }
}