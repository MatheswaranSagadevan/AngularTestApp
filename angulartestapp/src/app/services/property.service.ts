import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Property} from './../models/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) { }

  postPropertyDetails(formData) {
   
   const headers = new HttpHeaders().set("Content-Type","application/json")
                                    .set("Accept","application/json")
                                    .set("Access-Control-Allow-Headers","*");
    const body = {
    
      "Address": formData.address,
      "YearBuild":parseInt(formData.yearBuilt),
      "ListPrice":parseFloat(parseFloat(formData.listPrice).toFixed(2)),
      "MonthlyRent":parseFloat(parseFloat(formData.monthlyRent).toFixed(2)),
      "GrossYield":parseFloat(formData.grossYield)
  }
//    let property = new Property();
//    property.Address = formData.address,
//    property.YearBuild = formData.yearBuilt as number;
//    property.ListPrice =formData.listPrice as number;
//    property.MonthlyRent =formData.monthlyRent as number;
//    property.GrossYield =formData.grossYield as number;

 console.log(JSON.stringify(formData));
// console.log(JSON.stringify(property));
console.log(body);
  
    return this.http.post(environment.apiBaseURI + 'property', body, {headers});
  }

}
