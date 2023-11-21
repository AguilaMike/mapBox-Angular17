import { NgStyle } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Map, LngLat, Marker } from 'mapbox-gl';

@Component({
  standalone: true,
  imports: [NgStyle],
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.scss'
})
export class MarkersPageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map') divMap?: ElementRef;
  public markers: { color: string, marker: Marker }[] = [];
  public map?: Map;
  public zoomLevel: number = 5;
  public lngLat: LngLat = new LngLat(-99.13, 19.43);

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
    this.readMarkersLocalStorage();

    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Hello world';
    // const marker = new Marker({
    //   draggable: true,
    //   color: 'red',
    //   element: markerHtml
    // })
    //   .setLngLat(this.lngLat)
    //   .addTo(this.map);
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  createMarker(): void {
    if (!this.map) {
      return;
    }
    const color = '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
    const lngLat = this.map.getCenter();
    this.addMarker(lngLat, color);
  }

  private addMarker(lngLat: LngLat, color: string): void {
    if (!this.map) {
      return;
    }
    const marker = new Marker({
      draggable: true,
      color
    }).setLngLat(lngLat)
      .addTo(this.map!);

    this.markers.push({ color, marker });
    this.saveMarkersLocalStorage();
    marker.on('dragend', () => this.saveMarkersLocalStorage());
  }

  deleteMarker(index: number): void {
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
    this.saveMarkersLocalStorage();
  }

  flyTo(marker: Marker): void {
    this.map?.flyTo({
      zoom: 12,
      center: marker.getLngLat()
    });
  }

  saveMarkersLocalStorage(): void {
    const plainMarkers: { color: string, lngLat: number[] }[] = this.markers.map(({color, marker}) => {
      return {
        color,
        lngLat: marker.getLngLat().toArray()
      };
    });
    localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers));
  }

  readMarkersLocalStorage(): void {
    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers: { color: string, lngLat: number[] }[] = JSON.parse(plainMarkersString);
    plainMarkers.forEach(({ color, lngLat }) => {
      const [lng, lat] = lngLat;
      const coords = new LngLat(lng, lat);
      this.addMarker(coords, color);
    });
  }
}
