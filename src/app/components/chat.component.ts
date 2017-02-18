import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  template: `
  <input type="text" placeholder="Enter Message..."
                      [(ngModel)]="message" 
                      name="message"
                      (keyup.enter)="sendMessage()">
  <br>
  `
})
export class ChatComponent {
  messages: any = [];
  message: string;

  constructor(){

  }

  sendMessage(){
    console.log(this.message);
  }

}