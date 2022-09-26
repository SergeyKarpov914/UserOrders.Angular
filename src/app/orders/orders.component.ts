import { Component, OnInit } from '@angular/core';
import { GridApi, GridReadyEvent } from 'ag-grid-community';
import { Subscription } from "rxjs";
import { IOrder } from "./order";
import { IProduct } from "./order";
import { OrderListService } from "./orders.service";

@Component({
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  pageTitle = 'Orders';
  errorMessage = '';
  sub!: Subscription;

  private gridApi!: GridApi<IOrder>;

  //////////////////////////////////////////////////////////////////////////////
    columnDefsOrder = [
      {headerName: 'Order ID',        field: 'orderID',        width:100},
      {headerName: 'Required Date',   field: 'requiredDate',   width:150},
      {headerName: 'Shipped Date',    field: 'shippedDate',    width:150},
      {headerName: 'Order Date',      field: 'orderDate',      width:100},
      {headerName: 'Customer ID',     field: 'customerID',     width:150},
      {headerName: 'Employee ID',     field: 'employeeID',     width:80},
      {headerName: 'Ship Via',        field: 'shipVia',        width:80},
      {headerName: 'Freight',         field: 'freight',        width:100},
      {headerName: 'Name',            field: 'shipName',       width:200},
      {headerName: 'Address',         field: 'shipAddress',    width:200},
      {headerName: 'City',            field: 'shipCity',       width:150},
      {headerName: 'Region',          field: 'shipRegion',     width:150},
      {headerName: 'Postal Code',     field: 'shipCode',       width:150},
      {headerName: 'Country',         field: 'shipCountry',    width:150},
      ];

      columnDefsProduct = [
        {headerName: 'Product Name',     field: 'productName',     width:200},
        {headerName: 'Order Unit Price', field: 'orderUnitPrice',  width:100},
        {headerName: 'Quantity',         field: 'quantity',        width:100},      
        {headerName: 'Discount',         field: 'discount',        width:100},       
        {headerName: 'Unit Quantity',    field: 'quantityPerUnit', width:100},
        {headerName: 'Uunit Price',      field: 'unitPrice',       width:100},      
        {headerName: 'Units In Stock',   field: 'unitsInStock',    width:100},    
        {headerName: 'Units On Order',   field: 'unitsOnOrder',    width:100},    
        {headerName: 'Reorder Level',    field: 'reorderLevel',    width:100},    
        {headerName: 'discontinued',     field: 'discontinued',    width:100},  
        {headerName: 'Company',          field: 'companyName',     width:150},   
        {headerName: 'Contact',          field: 'contactName',     width:150},    
        {headerName: 'Contact Title',    field: 'contactTitle',    width:150},   
        {headerName: 'Address',          field: 'address',         width:150},        
        {headerName: 'City',             field: 'city',            width:150},           
        {headerName: 'Region',           field: 'region',          width:150},         
        {headerName: 'Postal Code',      field: 'postalCode',      width:150},     
        {headerName: 'Country',          field: 'country',         width:150},        
        {headerName: 'Phone',            field: 'phone',           width:150},          
        {headerName: 'Fax',              field: 'fax',             width:150},            
        {headerName: 'Home Page',        field: 'homePage',        width:150},       
        ];
      
    rowDataProduct: IProduct[] = [];
    rowDataOrder: IOrder[] = [];
    selectedRows: IOrder[] = [];
    selectedId: number = -1;
 
    defaultColDef = {
      sortable: true,
      filter: true
    };
 
    //////////////////////////////////////////////////////////////////////////////

  constructor(private orderService: OrderListService) { }

  getOrders(): void {
    this.sub = this.orderService.getAllOrders().subscribe({
        next: orders => {
          this.rowDataOrder = orders;
          console.log('All: ', JSON.stringify(this.rowDataOrder));
        },
    error: err => this.errorMessage = err
    });
  }
  getProducts(id: number): void {
    this.sub = this.orderService.getProducts(id).subscribe({
        next: orders => {
          this.rowDataProduct = orders;
          console.log('All: ', JSON.stringify(this.rowDataOrder));
        },
    error: err => this.errorMessage = err
    });
  }

  onSelectionChanged() {
    this.selectedRows = this.gridApi.getSelectedRows();
    if(this.selectedRows.length === 1) 
    {
      this.selectedId = this.selectedRows[0].orderID;
      this.getProducts(this.selectedId);
    }
  }
  
  onGridReady(params: GridReadyEvent<IOrder>) {
    this.gridApi = params.api;
  }
  ngOnInit(): void {
    this.getOrders();
  }
}
