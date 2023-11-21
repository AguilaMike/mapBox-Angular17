import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.scss'
})
export class FullScrennPageComponent implements AfterViewInit {
  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.divMap) {
      throw new Error('Map not found');
    }
    new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-99.13, 19.43], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }
}
