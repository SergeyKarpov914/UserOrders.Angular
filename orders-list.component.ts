import { Component, OnDestroy, OnInit } from "@angular/core";
import { GridApi, GridReadyEvent } from 'ag-grid-community';
import { Subscription } from "rxjs";
import { IOrder } from "./order";
import { IUser } from "../users/user";
//import { OrderUserService } from "../users/user.service";
import { OrderListService } from "./orders.service";

@Component({
    templateUrl: './orders-list.component.html',
    styleUrls: ['./orders-list.component.css']
 })
 export class OrderListComponent implements OnDestroy{
    pageTitle = 'Orders by User';
    errorMessage = '';
    sub!: Subscription;
    
    private gridApi!: GridApi<IUser>;

    //////////////////////////////////////////////////////////////////////////////
    columnDefsUser = [
    {headerName: '',               field: 'titleOfCourtesy', width:50},
    {headerName: 'First Name',     field: 'firstName',       width:100},
    {headerName: 'Last Name',      field: 'lastName',        width:100},
    {headerName: 'Title',          field: 'title',           width:200},
    ];
    
    columnDefsOrder = [
      {headerName: 'Order ID',        field: 'orderID',      width:100},
      {headerName: 'Required Date',   field: 'requiredDate', width:150},
      {headerName: 'Shipped Date',    field: 'shippedDate',  width:150},
      {headerName: 'Order Date',      field: 'orderDate',    width:100},
      {headerName: 'Customer ID',     field: 'customerID',   width:150},
      {headerName: 'Employee ID',     field: 'employeeID',   width:80},
      {headerName: 'Ship Via',        field: 'shipVia',      width:80},
      {headerName: 'Freight',         field: 'freight',      width:100 },
      {headerName: 'Name',            field: 'shipName',     width:150},
      {headerName: 'Address',         field: 'shipAddress',  width:150},
      {headerName: 'City',            field: 'shipCity',     width:150},
      {headerName: 'Region',          field: 'shipRegion',   width:150},
      {headerName: 'Postal Code',     field: 'shipCode',     width:150},
      {headerName: 'Country',         field: 'shipCountry',  width:150},
      ];

    rowDataUser: IUser[] = [];
    rowDataOrder: IOrder[] = [];
    selectedRows: IUser[] = [];
    selectedId: number = -1;
 
    defaultColDef = {
      sortable: true,
      filter: true
    };
 
    //////////////////////////////////////////////////////////////////////////////

    constructor(private orderService: OrderListService) {}

    users$ = this.orderService.users$.subscribe({
      next: users => {
        this.rowDataUser = users;
        console.log('All: ', JSON.stringify(this.rowDataUser));
      },
      error: err => this.errorMessage = err
    });
    
    getOrders(id: number): void {
      this.sub = this.orderService.getOrders(id).subscribe({
          next: orders => {
            this.rowDataOrder = orders;
            console.log('All: ', JSON.stringify(this.rowDataOrder));
          },
      error: err => this.errorMessage = err
      });
    }

    onSelectionChanged() {
      this.selectedRows = this.gridApi.getSelectedRows();
      if(this.selectedRows.length === 1) 
      {
        this.selectedId = this.selectedRows[0].employeeID;
        this.getOrders(this.selectedId);
      }
    }
    
    onGridReady(params: GridReadyEvent<IUser>) {
      this.gridApi = params.api;
    }
    
    //////////////////////////////////////////////////////////////////////////////
    ngOnDestroy(): void {
      this.sub.unsubscribe();
    }
 }

