import { Component, signal, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  imports: [],
  templateUrl: './scroll-top.html',
  styleUrl: './scroll-top.css',
})
export class ScrollTop implements OnInit, OnDestroy {
  visible = signal(false);

  private handler = () => {
    const host = document.querySelector('app-root');
    const scrolled = host ? host.scrollTop : window.scrollY;
    this.visible.set(scrolled > 300);
  };

  ngOnInit() {
    document.addEventListener('scroll', this.handler, true);
  }

  ngOnDestroy() {
    document.removeEventListener('scroll', this.handler, true);
  }

  scrollToTop() {
    const host = document.querySelector('app-root');
    if (host) {
      host.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}