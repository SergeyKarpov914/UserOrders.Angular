import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from "ag-grid-angular";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OrderListComponent } from './orders/orders-list.component';

@NgModule({
  imports: [
    BrowserModule,
    AgGridModule,
    HttpClientModule
  ],
  providers: [],
  declarations: [ AppComponent,OrderListComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
