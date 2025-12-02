
import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(mod => mod.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.component').then(mod => mod.RegisterComponent)
  },
  {
    // Rota raiz que carrega o layout principal (HomeComponent)
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/home/home.component').then(mod => mod.HomeComponent),
    children: [
      // Rota padrão (Dashboard)
      {
        path: '',
        loadComponent: () => import('./pages/dashboardpage/dashboardpage.component').then(mod => mod.DashboardpageComponent)
      },
      // Rota para a página Sobre
      {
        path: 'about',
        loadComponent: () => import('./pages/aboutpage/aboutpage.component').then(mod => mod.AboutpageComponent)
      },
      // Rota para a página de Contato
      {
        path: 'contact',
        loadComponent: () => import('./pages/contactpage/contactpage.component').then(mod => mod.ContactpageComponent)
      },

      // Rota para a página de Card
      {
        path: 'cards',
        loadComponent: () => import('./pages/cardpage/cardpage.component').then(mod => mod.CardpageComponent)
      },
      // Rota para a página de Criação de Cards
      {
        path: 'cards-create',
        loadComponent: () => import('./pages/creationcardpage/creationcardpage.component').then(mod => mod.CreationcardpageComponent)
      },
      // Rota para a página de Usuários
      {
        path: 'usuarios',
        loadComponent: () => import('./pages/usuariospage/usuariospage.component').then(mod => mod.UsuariospageComponent)
      },
      // Rota para a página Externa
      {
        path: 'externo',
        loadComponent: () => import('./pages/externopage/externopage.component').then(mod => mod.ExternopageComponent)
      }
    ]
  }
];
