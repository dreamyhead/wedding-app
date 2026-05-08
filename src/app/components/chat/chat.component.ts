import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  openChat() {
    window.open('https://vk.me/join/q8nbf/ucm6uU7pJd18NWmU2ldyIg9dZkNfc=', '_blank');
  }
}
