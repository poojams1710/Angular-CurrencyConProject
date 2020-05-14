import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import{ReactiveFormsModule,FormsModule} from '@angular/forms'
import {CurrencyexchangeService} from 'src/app/services/currencyexchange.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-chart-home',
  templateUrl: './chart-home.component.html',
  styleUrls: ['./chart-home.component.css']
})
export class ChartHomeComponent implements OnInit {
   chart=[];
   reactiveForm: FormGroup;
   currs :Array<any>
    price :Array<any>
    result :Array<any>
    Date :Array<any>
    wholeData:any;


  constructor(private chartservice : CurrencyexchangeService, private curren :CurrencyexchangeService) {
    this.reactiveForm = new FormGroup({
      from: new FormControl('', [Validators.required]),
      to: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      from: new FormControl('', [Validators.required]),
      to: new FormControl('', [Validators.required])
    })
  
    this.getcurrency();
  }

     
  getcurrency(){
    return this.curren.getData().subscribe((data)=>{
       console.log(data);
       console.log(data.rates);
       
        this.currs=Object.keys(data.rates);
    })
  }
  

    GetChart(){
      let from = this.reactiveForm.controls["from"].value;
      let to = this.reactiveForm.controls["to"].value; 
      let days = 11
      let date = new Date();
      let finalDate = new Date(date.getTime() - (days*24*60*60*1000))
      return this.chartservice.getChartValue(
        from,
        to,
        `${finalDate.getUTCFullYear()}-${('0' + (finalDate.getUTCMonth()+1)).slice(-2)}-${('0' + finalDate.getDate()).slice(-2)}`).subscribe((data)=>{
       console.log(data);
       this.wholeData=data;
       let start=data['start_date'];
       let end=data['end_date'];
       console.log(start);
       console.log(end);
       this.price=data['rates'];
       const xAxis =  Object.keys(this.price)
       const yAxis = Object.values(this.price).map((vale) => vale[to])
       console.log(xAxis, yAxis)
       console.log(this.price);

       
      //  for(i=data['start_date'];i<=data['end_date'];i=data['start_date'].getdate()+1){
        // this.price=data['rates']['2020-01-02'];
        // console.log(this.price);
      // }

       this.chart = new Chart('canvas', {
         type: 'line',
         data: {
           labels: xAxis,
           datasets: [
             {
               data: yAxis,
               borderColor: '#3cba9f',
               fill: false
             }     
           ]
         },
         options: {
           legend: {
             display: false
           },
           scales: {
             xAxes: [{
               display: true
             }],
             yAxes: [{
               display: true
             }]
           }
         }
       })




    })
  }
}


