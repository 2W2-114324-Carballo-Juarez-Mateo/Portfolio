import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

interface Card {
  titleKey: string;
  descKey: string;
  icon: string;
  image: string;
  route: string;
}

@Component({
  selector: 'app-hero',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  currentIndex = signal(0);

  cards: Card[] = [
    {
      titleKey: 'hero.cards.aboutTitle',
      descKey: 'hero.cards.aboutDesc',
      icon: '👤',
      image: '/images/sobreMiNav.jpeg',
      route: '/about',
    },
    {
      titleKey: 'hero.cards.skillsTitle',
      descKey: 'hero.cards.skillsDesc',
      icon: '💻',
      image: '/images/skills.jpg',
      route: '/skills',
    },
    {
      titleKey: 'hero.cards.projectsTitle',
      descKey: 'hero.cards.projectsDesc',
      icon: '🚀',
      image: '/images/projects.webp',
      route: '/projects',
    },
    {
      titleKey: 'hero.cards.contactTitle',
      descKey: 'hero.cards.contactDesc',
      icon: '📧',
      image: '/images/contact.webp',
      route: '/contact',
    },
  ];

  prevIndex = computed(() =>
    (this.currentIndex() - 1 + this.cards.length) % this.cards.length
  );
  nextIndex = computed(() =>
    (this.currentIndex() + 1) % this.cards.length
  );

  prevCard = computed(() => this.cards[this.prevIndex()]);
  nextCard = computed(() => this.cards[this.nextIndex()]);

  direction = signal(1);

  prev() {
    this.direction.set(-1);
    this.currentIndex.update(
      (i) => (i - 1 + this.cards.length) % this.cards.length
    );
  }
  next() {
    this.direction.set(1);
    this.currentIndex.update((i) => (i + 1) % this.cards.length);
  }
  goTo(i: number) {
    this.direction.set(i > this.currentIndex() ? 1 : -1);
    this.currentIndex.set(i);
  }
}
