import { Component, OnInit, Inject,LOCALE_ID } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import  {PropertyService } from './../services/property.service';
import  { StaticpropertyService } from './../services/staticproperty.service';
import {observable, Observable} from 'rxjs';
import {DecimalPipe, CurrencyPipe, PercentPipe} from '@angular/common';
import { formatCurrency,getCurrencySymbol } from '@angular/common';
import { Property } from 'src/app/models/property';
import { isDefined } from '@angular/compiler/src/util';
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  propertyDetailsForms: FormArray = this.fb.array([]);
    notification = null;
propertyList : Property[] =[];

  constructor(private fb: FormBuilder,
    private propertyService: PropertyService,
    private staticPropertyService: StaticpropertyService,
    private currencyPipe: CurrencyPipe,
    private decimalPipe: DecimalPipe,
    @Inject(LOCALE_ID) private locale: string) { }
    public result$: Observable<any>

  ngOnInit() {
        
this.staticPropertyService.getStaticPropertyDetails()
    .subscribe(
      res => {
        //generate formarray as per the data received from external json table
          (res['properties'] as []).forEach((data: any) => {
            //console.log(JSON.stringify(data));
            this.propertyDetailsForms.push(this.fb.group({
              proertyId: [0],
              address: [data?.address?.address1 ?? ''],
              yearBuilt: [data?.physical?.yearBuilt ?? ''],
              listPrice: [formatCurrency(data?.financial?.listPrice ?? '',this.locale,getCurrencySymbol('USD', 'wide'))],
              monthlyRent: [formatCurrency(data?.financial?.monthlyRent ?? '',this.locale,getCurrencySymbol('USD', 'wide'))],
              grossYield: [this.setGrossYield(data)]
            }));
          });
        
      }
    );
  }
setGrossYield(data: any){
 let  monthlyRent: number = data?.financial?.monthlyRent?? 0;
 let  listPrice: number = data?.financial?.listPrice ?? 0;
let grossYield: number=0.00;
if(monthlyRent ==0 || isNaN(monthlyRent) || !isDefined(monthlyRent) || listPrice ==0 || isNaN(listPrice) || !isDefined(listPrice))
return grossYield.toFixed(2).concat("%");  

return (monthlyRent *12 /listPrice).toFixed(2).concat("%");
}

  addPropertyDetailsForm() {
    this.propertyDetailsForms.push(this.fb.group({
      proertyId: [0],
      address: ['', Validators.required],
      yearBuilt: ['', Validators.required],
      listPrice: [0, Validators.min(1)],
      monthlyRent: ['', Validators.required],
      grossYield: ['', Validators.required]
    }));
  }

  recordSubmit(fg: FormGroup) {
    if(fg.value.listPrice != '' || fg.value.listPrice != null || fg.value.listPrice != NaN){
      fg.value.listPrice=fg.value.listPrice.replace(",","");
      fg.value.listPrice=fg.value.listPrice.substring(1);
  }
  if(fg.value.monthlyRent != '' || fg.value.monthlyRent != null || fg.value.monthlyRent != NaN){
    fg.value.monthlyRent=fg.value.monthlyRent.replace(",","");
    fg.value.monthlyRent=fg.value.monthlyRent.substring(1);
}
if(fg.value.grossYield != '' || fg.value.grossYield != null || fg.value.grossYield != NaN){
  fg.value.grossYield=fg.value.listPrice.replace(",","");
  fg.value.grossYield=fg.value.listPrice.replace("%","");
}
      this.propertyService.postPropertyDetails(fg.value).subscribe(
        (res: any) => {
          //fg.patchValue({ proertyId: res.proertyId });
          this.showNotification('insert');
        });
    
  }

  showNotification(category) {
    switch (category) {
      case 'insert':
        this.notification = { class: 'text-success', message: 'saved!' };
        break;
      case 'update':
        this.notification = { class: 'text-primary', message: 'updated!' };
        break;
      case 'delete':
        this.notification = { class: 'text-danger', message: 'deleted!' };
        break;

      default:
        break;
    }
    setTimeout(() => {
      this.notification = null;
    }, 3000);
  }

}
