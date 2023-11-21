import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'maps', pathMatch: 'full' },
  { path: 'maps', loadChildren: () => import('./maps/maps.routing').then(m => m.routes) },
  { path: '**', redirectTo: 'maps' },
];
