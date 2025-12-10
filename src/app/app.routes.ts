import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/cover/cover').then((m) => m.Cover),
  },
];
