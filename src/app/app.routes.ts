import { Routes } from '@angular/router';

export const routes: Routes = [
    {

      path : '',
      loadComponent: () => import('./features/home/home.component').then(mod => mod.HomeComponent),
      children :  [


        { path: 'card',
          loadComponent: () => import('./components/card/card.component').then(mod => mod.CardComponent)

        },

          {
            path: 'dashboard',
            loadComponent: () => import('./components/dashboard/dashboard.component').then(mod => mod.DashboardComponent)
          },
      ]
    }
];
