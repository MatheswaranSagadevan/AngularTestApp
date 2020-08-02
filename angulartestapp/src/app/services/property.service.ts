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

console.log(JSON.stringify(formData));
console.log(body);
  
    return this.http.post(environment.apiBaseURI + 'property', body, {headers});
  }

}
