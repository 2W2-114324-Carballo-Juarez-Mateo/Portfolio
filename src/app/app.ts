import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ParticlesBg } from './components/particles-bg/particles-bg';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ParticlesBg],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "Portfolio";
}
