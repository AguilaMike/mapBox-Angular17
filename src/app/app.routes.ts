import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'maps', pathMatch: 'full' },
  { path: 'maps', loadChildren: () => import('./maps/maps.routing').then(m => m.routes) },
  { path: 'alone', loadComponent: () => import('./alone/pages/alone-page/alone-page.component').then(m => m.AlonePageComponent)},
  { path: '**', redirectTo: 'maps' },
];
