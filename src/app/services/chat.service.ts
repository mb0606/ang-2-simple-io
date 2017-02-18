import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
  private url = 'http://localhost:8000';
  private socket:any;

  setUsername(username:string){
    console.log(`Username set: ${username}`)
  }

  sendMessage(message:string){
    this.socket.emit('add-message', message);
  }

  getMessages(){
    let observable = new Observable((observer:any) => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    })
    return observable;
  }

}