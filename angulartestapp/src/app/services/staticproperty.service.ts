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
 }

}

