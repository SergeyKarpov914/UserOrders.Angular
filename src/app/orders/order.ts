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

export interface IProduct {
  'orderID': number;       
  'productName': string;
  'orderUnitPrice': number;
  'quantity': number;      
  'discount': number;       
  'quantityPerUnit': string;
  'unitPrice': number;      
  'unitsInStock': number;        
  'unitsOnOrder': number;        
  'reorderLevel': number;        
  'discontinued': boolean;  
  'companyName': string;   
  'contactName': string;    
  'contactTitle': string;   
  'address': string;        
  'city': string;           
  'region': string;         
  'postalCode': string;     
  'country': string;        
  'phone': string;          
  'fax': string;            
  'homePage': string;       
}
