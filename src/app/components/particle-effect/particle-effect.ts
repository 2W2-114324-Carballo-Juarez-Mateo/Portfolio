import { Component, Input, signal } from "@angular/core"

interface Particle {
    id: number,
    x: number,
    y: number,
    size: number,
    delay: number
}

@Component ({
    selector: 'app-particle-effect',
    imports: [],
    templateUrl: './particle-effect.html',
    styleUrl: './particle-effect.css'
})

export class ParticleEffect {
    @Input() color = 'oklch(82.8% 0.111 230.318)';
    @Input() count = 12;

    particles = signal<Particle[]>([]);
    private idCounter = 0;
    private timer: any = null;

    burst() {
        clearTimeout(this.timer);
        const arr: Particle[] = []
        for (let i = 0; i < this.count; i++) {
            arr.push({
                id: this.idCounter++,
                x: (Math.random() - 0.5) * 200,
                y: (Math.random() - 0.5) * 200,
                size: Math.random() * 4 + 2,
                delay: Math.random() * 0.8,
            })
        }
        this.particles.set(arr)
    }

    clear() {
        this.timer = setTimeout(() => {
            this.particles.set([]);
        }, 400);
    }
}
