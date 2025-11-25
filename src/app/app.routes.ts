import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      // Rota raiz que carrega o layout principal (HomeComponent)
      path : '',
      loadComponent: () => import('./pages/home/home.component').then(mod => mod.HomeComponent),
      children :  [
        // Rota padrão (Dashboard)
        {
            path: '',
            loadComponent: () => import('./pages/dashboardpage/dashboardpage.component').then(mod => mod.DashboardpageComponent)
          },
        // Rota para a página Sobre
        { path: 'about',
          loadComponent: () => import('./pages/aboutpage/aboutpage.component').then(mod => mod.AboutpageComponent)
        },
        // Rota para a página de Contato
        { path: 'contact',
          loadComponent: () => import('./pages/contactpage/contactpage.component').then(mod => mod.ContactpageComponent)
        },

        // Rota para a página de Contato
        { path: 'cards',
          loadComponent: () => import('./pages/cardpage/cardpage.component').then(mod => mod.CardpageComponent)
        }
      ]
    }
];
