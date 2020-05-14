import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { CurrencyRoutingModule } from './currency-routing.module';
import { CurrencyHomeComponent } from './currency-home/currency-home.component';



@NgModule({
  declarations: [CurrencyHomeComponent],
  imports: [
    CommonModule,
    CurrencyRoutingModule,
    FormsModule,
    ReactiveFormsModule,


    
  ]
})
export class CurrencyModule { }
