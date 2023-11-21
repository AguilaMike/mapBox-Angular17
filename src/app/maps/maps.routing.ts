import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/maps-layout/maps-layout.component').then(m => m.MapsLayoutComponent),
    children: [
      { path: 'fullscreen', loadComponent: () => import('./pages/full-screen-page/full-screen-page.component').then(m => m.FullScrennPageComponent) },
      { path: 'markers', loadComponent: () => import('./pages/markers-page/markers-page.component').then(m => m.MarkersPageComponent) },
      { path: 'properties', loadComponent: () => import('./pages/properties-page/properties-page.component').then(m => m.PropertiesPageComponent) },
      { path: 'zoom-range', loadComponent: () => import('./pages/zoom-range-page/zoom-range-page.component').then(m => m.ZoomRangePageComponent) },
      { path: '**', redirectTo: 'fullscreen' },
    ]
  },
];
