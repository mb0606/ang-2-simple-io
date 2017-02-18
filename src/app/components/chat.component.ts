import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../services/chat.service'


@Component({
  selector: 'app-chat',
  template: `

  <div>
    <label for="username">Username: </label>
    <input type="text" [(ngModel)]="username" 
                       name="username">
    <button (click)="setUsername()">Submit</button>
  </div>
  <div *ngIf="username">
    <input type="text" placeholder="Enter Message..."
                      [(ngModel)]="message" 
                      name="message"
                      (keyup.enter)="sendMessage()">
    <div *ngFor="let message of messages">
     <strong>{{message.username}}:</strong> {{message.text}}
    </div>
  </div><!-- ngif -->
  
  <br>
    <div *ngIf="!username">Please Login to chat</div>
  `
})
export class ChatComponent implements OnInit, OnDestroy{
  messages: any = [];
  message: string;
  connection: any;
  username: string;
  alert: any = false;

  constructor(private _chatService: ChatService){

  }

  sendMessage(){
    this._chatService.sendMessage(this.message, this.username);
    this.message = '';
  }

  setUsername(){
    this._chatService.setUsername(this.username);
    this.alert = 'Username is set';
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