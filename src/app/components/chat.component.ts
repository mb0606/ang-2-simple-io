import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../services/chat.service'


@Component({
  selector: 'app-chat',
  template: `
  <input type="text" placeholder="Enter Message..."
                      [(ngModel)]="message" 
                      name="message"
                      (keyup.enter)="sendMessage()">
  <br>
  
  <div *ngFor="let message of messages">
    {{message.text}}
  </div>
  `
})
export class ChatComponent implements OnInit, OnDestroy{
  messages: any = [];
  message: string;
  connection: any;

  constructor(private _chatService: ChatService){

  }

  sendMessage(){
    this._chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit(){
    this.connection = this._chatService.getMessages()
        .subscribe( message => {
          console.log(message);
          this.messages.unshift(message);
        })
  }

  ngOnDestroy(){
     this.connection.unsubscribe()
  }

}