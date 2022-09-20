import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IOrder } from "./order";
import { IUser } from "./order-user";
import { OrderUserService } from "./order-user.service";
import { OrderListService } from "./orders-list.service";

@Component({
    selector: 'sk-orders',
    templateUrl: './orders-list.component.html',
    styleUrls: ['./orders-list.component.css']
 })
 export class OrderListComponent implements OnInit, OnDestroy{
    title = 'UserOrders';
    errorMessage = '';
    sub!: Subscription;

    columnDefs = [
    {headerName: 'OrderID',        field: 'id'},
    {headerName: 'CustomerID',     field: 'customer'},
    {headerName: 'EmployeeID',     field: 'employee'},
    {headerName: 'OrderDate',      field: 'orderDate'},
    {headerName: 'RequiredDate',   field: 'requiredDate'},
    {headerName: 'ShippedDate',    field: 'shippingDate'},
    {headerName: 'ShipVia',        field: 'shipVia'},
    {headerName: 'Freight',        field: 'freight'},
    {headerName: 'ShipName',       field: 'name'},
    {headerName: 'ShipAddress',    field: 'address'},
    {headerName: 'ShipCity',       field: 'city'},
    {headerName: 'ShipRegion',     field: 'region'},
    {headerName: 'ShipPostalCode', field: 'code'},
    {headerName: 'ShipCountry',    field: 'country'},
    ];
     
    rowData: IOrder[] = [];
    ////////////////////////////////////////////////////////////

    constructor(private orderService: OrderListService, private userService: OrderUserService) {}

    ngOnInit(): void {
      this.sub = this.userService.getUsers().subscribe({
        next: products => {
          this.rowData = products;
        },
        error: err => this.errorMessage = err
      });
    }
  
    ngOnDestroy(): void {
      this.sub.unsubscribe();
    }

    ngOnUser() {
                             // .then(svcData => this.rowData = svcData)

    }
    
 }

