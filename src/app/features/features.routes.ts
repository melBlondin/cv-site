import { Routes } from '@angular/router';
import { Services } from './services/services';

export const featuresRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: '*',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'services',
    loadComponent: () => import('./services/services').then((m) => m.Services),
  },
  {
    path: 'tarifs',
    loadComponent: () => import('./tarifs/tarifs').then((m) => m.Tarifs),
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact').then((m) => m.Contact),
  },
  {
    path: 'legal',
    loadComponent: () => import('./legal-mentions/legal-mentions').then((m) => m.LegalMentions),
  },
  {
    path: 'datas',
    loadComponent: () => import('./data-management/data-management').then((m) => m.DataManagement),
  },
];
