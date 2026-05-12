import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  openForm() {
    window.open('https://forms.yandex.ru/u/6a01a1c36d2d73abd44df573/', '_blank');
  }
}
