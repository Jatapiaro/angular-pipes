import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ConstraseniaPipe } from './pipes/constrasenia.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DomseguroPipe,
    ConstraseniaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
