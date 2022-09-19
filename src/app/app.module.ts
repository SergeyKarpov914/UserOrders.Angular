import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from "ag-grid-angular";
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AgGridModule
  ],
  providers: [],
  declarations: [ AppComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
