import { Component } from '@angular/core';

@Component({
  selector: 'app-place',
  imports: [],
  templateUrl: './place.component.html',
  styleUrl: './place.component.scss',
})
export class PlaceComponent {
  openYMap() {
    window.open(
      'https://yandex.ru/maps/org/khitryye_lyudi/1246708985/?ll=37.665650%2C55.755664&z=14.33',
      '_blank',
    );
  }
}
