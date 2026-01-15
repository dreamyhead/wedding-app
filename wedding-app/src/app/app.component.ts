import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "./components/main/main.component";
import { MapComponent } from "./components/map/map.component";
import { ChatComponent } from "./components/chat/chat.component";
import { DetailsComponent } from "./components/details/details.component";
import { DressCodeComponent } from "./components/dress-code/dress-code.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
  imports: [MainComponent, MapComponent, ChatComponent, DetailsComponent, DressCodeComponent],
})
export class AppComponent {}
