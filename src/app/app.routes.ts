import { Routes } from '@angular/router';
import { Layout } from './components/layout/layout';
import { Cv } from './components/cv/cv';
import { NotFound } from './features/not-found/not-found';
import { featuresRoutes } from './features/features.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Cv,
  },

  {
    path: 'rea2',
    component: Layout,
    children: featuresRoutes,
  },
  {
    path: '**',
    component: NotFound,
  },
];
