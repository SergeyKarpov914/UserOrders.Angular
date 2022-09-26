import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError, map, of } from "rxjs";

import { IOrder } from "./order";
import { IUser } from "../users/user";
import { IProduct } from "./order";
import { ITerritory } from "../users/user";

@Injectable({
  providedIn: 'root'
})
export class OrderListService {
  private orderUrl = 'http://localhost:4210/api/orders/';
  private userUrl = 'http://localhost:4210/api/users';
  private productUrl = 'http://localhost:4210/api/products/';
  private territoryUrl = 'http://localhost:4210/api/territories/';
  
  constructor(private http: HttpClient) { }

  getOrders(id: number): Observable<IOrder[]> {
      return this.http.get<IOrder[]>(this.orderUrl + id) 
        .pipe(
          tap(data => console.log('All: ', JSON.stringify(data))),
          catchError(err => of([]))
        );
  }

  getProducts(id: number): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl + id) 
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(err => of([]))
      );  
  }

  getTerritories(id: number): Observable<ITerritory[]> {
    return this.http.get<ITerritory[]>(this.territoryUrl + id) 
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(err => of([]))
      );
  }

  getAllOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.orderUrl) 
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(err => of([]))
      );
  }

  users$ = this.http.get<IUser[]>(this.userUrl)
  .pipe(catchError(err => of([])));
    

/*
  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
  */
}
