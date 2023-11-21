import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  title: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'maps-side-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  public menuItems: MenuItem[] = [
    { link: '/maps/fullscreen', icon: 'bi bi-arrows-fullscreen', title: 'Full Screen' },
    { link: '/maps/zoom-range', icon: 'bi bi-arrows-move', title: 'Zoom Range' },
    { link: '/maps/markers', icon: 'bi bi-geo-alt', title: 'Markers' },
    { link: '/maps/properties', icon: 'bi bi-houses', title: 'Houses' },
    { link: '/alone', icon: 'bi bi-people', title: 'Alone' },
  ];
}
