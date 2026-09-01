import { Component, inject, signal } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ParticlesBg } from './components/particles-bg/particles-bg';
import { ScrollTop } from './components/scroll-top/scroll-top';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ParticlesBg, ScrollTop],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Portfolio';

  constructor() {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    const router = inject(Router);
    router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => {
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
          window.scrollTo(0, 0);
        }, 0);
      });
  }
}