import { Component, ElementRef, inject, signal } from '@angular/core';
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
  private host = inject(ElementRef<HTMLElement>);

  constructor() {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    const router = inject(Router);
    router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        this.resetScroll();
        requestAnimationFrame(() => this.resetScroll());
        setTimeout(() => this.resetScroll(), 100);
        setTimeout(() => this.resetScroll(), 300);
      });
  }

  onActivate() {
    this.resetScroll();
    requestAnimationFrame(() => this.resetScroll());
  }

  private resetScroll() {
    this.host.nativeElement.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }
}