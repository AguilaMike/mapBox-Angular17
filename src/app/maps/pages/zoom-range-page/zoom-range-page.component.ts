import { DecimalPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Map, LngLat } from 'mapbox-gl';

@Component({
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.scss'
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map') divMap?: ElementRef;
  public map?: Map;
  public zoomLevel: number = 10;
  public center: { lng: number, lat: number } = { lng:-99.13, lat:19.43};
  public lngLat: LngLat = new LngLat(this.center.lng, this.center.lat);

  ngAfterViewInit(): void {
    if (!this.divMap) {
      throw new Error('Map not found');
    }
    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: this.zoomLevel, // starting zoom
    });
    this.mapListener();
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  mapListener() {
    if (!this.map) {
      throw new Error('Map not found');
    }
    this.map.on('zoom', (ev) => {
      this.zoomLevel = this.map?.getZoom() || 0;
    });
    this.map.on('zoomend', (ev) => {
      if (this.map?.getZoom()! > 18) {
        this.map?.zoomTo(18);
      }
    });
    this.map.on('move', (ev) => {
      this.lngLat = this.map?.getCenter()!;
      const { lng, lat } = this.lngLat;
      this.center = { lng: Number(lng.toFixed(2)), lat: Number(lat.toFixed(2)) };
    });
  }

  zoomOut(): void {
    if (!this.map) {
      throw new Error('Map not found');
    }
    this.map.zoomOut();
  }

  zoomIn(): void {
    if (!this.map) {
      throw new Error('Map not found');
    }
    this.map.zoomIn();
  }

  zoomChange(valor: string): void {
    if (!this.map) {
      throw new Error('Map not found');
    }
    this.map.zoomTo(Number(valor));
  }
}
