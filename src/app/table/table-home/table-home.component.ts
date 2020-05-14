import { Component, OnInit } from '@angular/core';
import { CurrencyexchangeService } from 'src/app/services/currencyexchange.service';

@Component({
  selector: 'app-table-home',
  templateUrl: './table-home.component.html',
  styleUrls: ['./table-home.component.css']
})
export class TableHomeComponent implements OnInit {

  currencies:Array<any>
  rates:Array<any>

  constructor(private currency :CurrencyexchangeService) {
    this.currencies=new Array<any>()
   }

  showData(){
    return this.currency.getData().subscribe((data)=>{
      console.log(data);
      this.currencies=Object.keys(data.rates);
      this.rates=Object.values(data.rates)
    })
  }

  ngOnInit() {
  }

}
