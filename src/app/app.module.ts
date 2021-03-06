import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import {ToDoModule } from 'src/app/to-do/to-do/to-do.module';
import { ToDoComponent } from './to-do/components/to-do/to-do/to-do.component';
 
@NgModule({
  declarations: [AppComponent, ToDoComponent],
  imports: [BrowserModule, AppRoutingModule,ToDoModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
