import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path : 'dashboard',
      loadComponent: () => import('./features/dashboard/dashboard.component').then(mod => mod.DashboardComponent)
    }




];
