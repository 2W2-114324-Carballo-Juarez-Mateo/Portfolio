import { Component } from '@angular/core';

interface FallParticle {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

@Component({
  selector: 'app-particles-bg',
  imports: [],
  templateUrl: './particles-bg.html',
  styleUrl: './particles-bg.css',
})
export class ParticlesBg {
  particles: FallParticle[] = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 25,
    duration: Math.random() * 20 + 18,
    opacity: Math.random() * 0.5 + 0.25,
  }));
}
