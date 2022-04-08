import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from 'src/app/capp-routing.module';
import { AppComponent } from 'src/app/app.component';
import {ToDoModule } from 'src/app/to-do/to-do.module';
import { ToDo } from './to-do/components/to-do/to-do.html/to-do.html.component'; 
@NgModule({
  declarations: [
    AppComponent,
    ToDo.HtmlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ToDoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
