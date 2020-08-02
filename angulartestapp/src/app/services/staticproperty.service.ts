import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Operator, pipe,observable, Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { map} from 'rxjs/operators/';
import { Property } from 'src/app/models/property';

@Injectable({
  providedIn: 'root'
})
export class StaticpropertyService {
  

  constructor(private http: HttpClient) { }

  getStaticPropertyDetails() {
        
    // let properties : Property[] = [];

      const headers = new HttpHeaders().set("Content-Type","application/json")
      .set("Accept","application/json")
      .set("Access-Control-Allow-Headers","*")
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Credentials', 'false')
      .set('Access-Control-Allow-Methods', '*');
      

      return this.http.get('https://samplerspubcontent.blob.core.windows.net/public/properties.json', {headers});
      
    //  .subscribe(
    //   res => {
    //     //generate models as per the data received from BankAccont table
    //       (res['properties'] as []).forEach((data: any) => {
    //         let property = new Property();
    //         property.Address = data?.address?.address1;
    //         property.YearBuild = data?.physical?.yearBuilt;
    //         property.ListPrice = data?.financial?.listPrice;
    //         property.MonthlyRent = data?.financial?.monthlyRent;
    //         property.GrossYield = ((data?.financial?.monthlyRent?? 0) * 12 / (data?.financial?.listPrice ?? 0));
    //         properties.push(property);
            
    //       })
    //     });
    // console.log(properties);
    
    //  return properties;

  }

//   private extractData(res: Response) {
//     let body = res.json();
//     return body;
// } 

//   handleError(error) {
//     let errorMessage = '';
//     if (error.error instanceof ErrorEvent) {
//         // client-side error
//         errorMessage = `Error: ${error.error.message}`;
//     } else {
//         // server-side error
//         errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//     }
//     console.log(errorMessage);
//     return throwError(errorMessage);
// }
  }

