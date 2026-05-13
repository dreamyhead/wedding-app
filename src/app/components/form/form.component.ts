import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  openForm() {
    window.open('https://forms.yandex.ru/u/6a04b61b068ff06eda0d5936/', '_blank');
  }
}
