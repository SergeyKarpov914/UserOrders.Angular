import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from "ag-grid-angular";
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './orders/orders-list.component';

@NgModule({
  imports: [
    BrowserModule,
    AgGridModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'users', component: UsersComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'orders-list', component: OrderListComponent },
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: '**', redirectTo: 'users', pathMatch: 'full' }
    ])
    ],
  providers: [],
  declarations: [ 
    AppComponent,
    UsersComponent,
    OrdersComponent,
    OrderListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
