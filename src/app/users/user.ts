
export interface IUser {
    employeeID: number;
    titleOfCourtesy: string;
    lastName: string;
    firstName: string;
    title: string;
    reportsTo: string;
    birthDate: Date;
    hireDate: Date;
    address: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
    homePhone: string;
    extension: string;
  }

export interface ITerritory {
  employeeID: number;
  territoryId: string;
  territoryDescription: string;
  regionDescription: string;
}