import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ParticleEffect } from '../particle-effect/particle-effect';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, ParticleEffect, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  languages = [
    { code: 'es', label: 'Español', flag: 'ES' },
    { code: 'en', label: 'English', flag: 'EN' },
    { code: 'pt', label: 'Português', flag: 'BR' },
  ];

  currentLang = signal('es');
  langOpen = signal(false);
  isDark = signal(true);

  constructor(private translate: TranslateService) {
    const lang = localStorage.getItem('lang') ?? 'es';
    this.translate.use(lang);
    this.currentLang.set(lang);

    const dark = localStorage.getItem('theme') !== 'light';
    this.isDark.set(dark);
    this.applyTheme(dark);
  }

  toggleLang() {
    this.langOpen.update((v) => !v);
  }

  setLang(code: string) {
    this.translate.use(code);
    this.currentLang.set(code);
    localStorage.setItem('lang', code);
    this.langOpen.set(false);
  }

  toggleTheme() {
    const dark = !this.isDark();
    this.isDark.set(dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    this.applyTheme(dark);
  }

  private applyTheme(dark: boolean) {
    document.documentElement.classList.toggle('light', !dark);
  }
}
