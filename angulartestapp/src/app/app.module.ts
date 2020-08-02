import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
//import { formatCurrency,getCurrencySymbol } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [CurrencyPipe, DecimalPipe, PercentPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
