import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../services/chat.service'


@Component({
  selector: 'app-chat',
  template: `

  <div class="input-group">

    <input class="form-control" type="text" [(ngModel)]="username" 
                       name="username">
    <span class="input-group-btn">
      <button type="button" class="btn btn-secondary" (click)="setUsername()">Submit</button>
    </span>
  </div>
  
  <br>
  <hr>
  <div *ngIf="username">
  <h1 class="text-center">Chat</h1>
    <input class="form-control" 
            type="text" 
            placeholder="Enter Message..."
            [(ngModel)]="message" 
            name="message"
            (keyup.enter)="sendMessage()">
    <div *ngFor="let message of messages">
    <div class="well">
      <strong>{{message.username}}:</strong> {{message.text}}
     </div>
    </div>
  </div><!-- ngif -->
  
  <br>
    <div *ngIf="!username" class="text-center">Please Login to chat</div>
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