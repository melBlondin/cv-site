import { Routes } from '@angular/router';
import { featuresRoutes } from './features/features.routes';
import { Layout } from './components/layout/layout';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: featuresRoutes,
    },
];