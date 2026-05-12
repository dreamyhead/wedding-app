import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, signal } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { DressCodeComponent } from './components/dress-code/dress-code.component';
import { PlaceComponent } from './components/place/place.component';
import { TimeLineComponent } from './components/time-line/time-line.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatComponent } from './components/chat/chat.component';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-root',
  imports: [
    MainComponent,
    TimeLineComponent,
    DressCodeComponent,
    PlaceComponent,
    ChatComponent,
    FooterComponent,
    FormComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy {
  protected readonly title = signal('wed-app');
  public readonly isMobile = signal<boolean>(false);
  private mediaQueryList: MediaQueryList | null = null;
  private readonly _mqListener = (e: MediaQueryListEvent) => this.isMobile.set(e.matches);

  constructor() {
    this.mediaQueryList = window.matchMedia('(max-width: 768px)');
    this.isMobile.set(this.mediaQueryList.matches);
    this.mediaQueryList.addEventListener('change', this._mqListener as EventListener);
  }

  ngOnDestroy(): void {
    if (!this.mediaQueryList) {
      return;
    }

    this.mediaQueryList.removeEventListener('change', this._mqListener as EventListener);
  }
}
