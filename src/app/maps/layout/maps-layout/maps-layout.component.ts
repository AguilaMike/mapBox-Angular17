import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWRtaWd1ZWxoIiwiYSI6ImNscDdoMDB0YTF4azYya3F2Y21wM3FzaXUifQ.ZkaVcSB79H6VuGqg1gLfdw';

@Component({
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './maps-layout.component.html',
  styleUrl: './maps-layout.component.scss'
})
export class MapsLayoutComponent {}
