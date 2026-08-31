import { Routes } from '@angular/router';

export const routes: Routes = [
     { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./components/hero/hero').then(c => c.Hero) },
  { path: 'about', loadComponent: () => import('./components/about/about').then(c => c.About) },
  { path: 'skills', loadComponent: () => import('./components/skills/skills').then(c => c.Skills) },
  { path: 'projects', loadComponent: () => import('./components/projects/projects').then(c => c.Projects) },
  { path: 'contact', loadComponent: () => import('./components/contact/contact').then(c => c.Contact) }
];
