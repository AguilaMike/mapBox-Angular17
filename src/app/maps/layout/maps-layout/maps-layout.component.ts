import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

import mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environment';

mapboxgl.accessToken = environment.mapbox_key;

@Component({
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './maps-layout.component.html',
  styleUrl: './maps-layout.component.scss'
})
export class MapsLayoutComponent {}
