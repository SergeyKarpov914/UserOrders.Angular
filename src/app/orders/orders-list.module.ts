import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from "ag-grid-angular";
import { OrderListComponent } from './orders-list.component';

@NgModule({
  imports: [
    BrowserModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [OrderListComponent]
})
export class OrderListModule { }