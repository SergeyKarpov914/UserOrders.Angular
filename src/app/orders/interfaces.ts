export interface IOrder {
  'orderID': number;
  'customerID': string;
  'employeeID': number;
  'orderDate': Date;
  'requiredDate': Date;
  'shippedDate': Date;
  'shipVia': number;
  'freight': number;
  'shipName': string;
  'shipAddress': string;
  'shipCity': string;
  'shipRegion': string;
  'shipCode': string;
  'shipCountry': string;
}

export interface IUser {
    employeeID: number;
    lastName: string;
    firstName: string;
    title: string;
  }