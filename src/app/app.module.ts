import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PprlDataViewModule } from './pprl-data-view/pprl-data-view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PprlDataViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
