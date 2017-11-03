import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { contadorReducer } from './reducers/contador.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ contadorReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }