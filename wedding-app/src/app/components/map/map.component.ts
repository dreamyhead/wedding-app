import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class MapComponent {
  openYandexMap() {
    window.open('https://yandex.ru/maps/org/ararat/70976680839?si=k8t9x6ud5x83bn2hwma15gt50g', '_blank');
  }
}
