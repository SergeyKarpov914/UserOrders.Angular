import { Component } from '@angular/core';  // Component is a function, imported from core lib

@Component({
  selector: 'sk-root',
  templateUrl: './app.component.html',     // points to html in separate file
  styleUrls: ['./app.component.css']       
})
export class AppComponent {
  title = 'UserOrders';
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
   
  rowData = [];
  
  ngOnUser() {
    fetch('https://localhost:44001/api/orders')
      .then(result => result.json())
      .then(svcData => this.rowData = svcData);
  }
}
