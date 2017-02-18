import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ChatComponent} from "./components/chat.component";

import {ChatService} from "./services/chat.service";
import {NavbarComponent} from "./components/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ ChatService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
