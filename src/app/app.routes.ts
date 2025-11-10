import { Routes } from '@angular/router';

export const routes: Routes = [
    {

      path : 'home',
      loadComponent: () => import('./features/home/home.component').then(mod => mod.HomeComponent),
      children :  [
          {
            path: 'dashboard',
            loadComponent: () => import('./components/dashboard/dashboard.component').then(mod => mod.DashboardComponent)
          },




      ]
    }
];
