import { Component, OnDestroy, OnInit } from "@angular/core";
import { GridApi, GridReadyEvent } from 'ag-grid-community';
import { Subscription } from "rxjs";

import { IUser } from "../users/user";
import { ITerritory } from "../users/user";

import { OrderListService } from "../orders/orders.service";

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  pageTitle = 'Users';
  errorMessage = '';
  sub!: Subscription;
  
  private gridApi!: GridApi<IUser>;

  //////////////////////////////////////////////////////////////////////////////
  columnDefsUser = [
    {headerName: 'Prefix',         field: 'titleOfCourtesy', width:100},
    {headerName: 'First Name',     field: 'firstName',       width:100},
    {headerName: 'Last Name',      field: 'lastName',        width:100},
    {headerName: 'Title',          field: 'title',           width:200},
    {headerName: 'Reports to',     field: 'reportsTo',       width:100},
    {headerName: 'Birth date',     field: 'birthDate',       width:200},
    {headerName: 'Hire date',      field: 'hireDate',        width:100},
    {headerName: 'Address',        field: 'address',         width:100},
    {headerName: 'City',           field: 'city',            width:200},
    {headerName: 'Region',         field: 'region',          width:100},
    {headerName: 'Postal code',    field: 'postalCode',      width:100},
    {headerName: 'Country',        field: 'country',         width:200},
    {headerName: 'Phone',          field: 'homePhone',       width:100},
    {headerName: 'Extension',      field: 'extension',       width:100},
  ];

  columnDefsTerritory = [
    {headerName: 'Territory Id',     field: 'territoryID',          width:100},
    {headerName: 'Description',      field: 'territoryDescription', width:100},
    {headerName: 'Region',           field: 'regionDescription',    width:100},
  ];
  
  rowDataUser: IUser[] = [];
  rowDataTerritory: ITerritory[] = [];
  selectedRows: IUser[] = [];
  selectedId: number = -1;

  defaultColDef = {
    sortable: true,
    filter: true
  };

  //////////////////////////////////////////////////////////////////////////////

  constructor(private orderService: OrderListService) { }

  users$ = this.orderService.users$.subscribe({
    next: users => {
      this.rowDataUser = users;
      console.log('All: ', JSON.stringify(this.rowDataUser));
    },
    error: err => this.errorMessage = err
  });
  
  getTerritories(id: number): void {
    this.sub = this.orderService.getTerritories(id).subscribe({
        next: territory => {
          this.rowDataTerritory = territory;
          console.log('All: ', JSON.stringify(this.rowDataTerritory));
        },
    error: err => this.errorMessage = err
    });
  }
 
  onSelectionChanged() {
    this.selectedRows = this.gridApi.getSelectedRows();
    if(this.selectedRows.length === 1) 
    {
      this.selectedId = this.selectedRows[0].employeeID;
      this.getTerritories(this.selectedId);
    }
  }
  
  onGridReady(params: GridReadyEvent<IUser>) {
    this.gridApi = params.api;
  }
  
  ngOnInit(): void {
  }

}
