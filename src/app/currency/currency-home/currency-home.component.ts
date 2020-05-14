import { Component, OnInit } from '@angular/core';
import {CurrencyexchangeService} from 'src/app/services/currencyexchange.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-currency-home',
  templateUrl: './currency-home.component.html',
  styleUrls: ['./currency-home.component.css']
})
export class CurrencyHomeComponent implements OnInit {

  currs :Array<any>
  rates :Array<any>
  wholeData:any;
  form:String;
  message:String;
  torate:number;
  keyvalue:any;

  reactiveForm:FormGroup;
  
  constructor(private curren:CurrencyexchangeService) {
    this.currs=new Array<any>();
    this.rates=new Array<any>(); 
      
    this.message = "0"
    this.reactiveForm = new FormGroup({
      from: new FormControl('', [Validators.required]),
      to: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required])
    })
  }

  getcurrency(){
    return this.curren.getData().subscribe((data)=>{
       console.log(data);
       console.log(data.rates);
       this.wholeData = data
        this.currs=Object.keys(data.rates);
        this.rates=Object.values(data.rates);
        console.log(this.wholeData.rates['AUD']);
        
        
    })
  }


  convert() {
    const formValue = this.reactiveForm.value;
      
    console.log(this, formValue);

    this.reactiveForm.get('from').value
    console.log(this.reactiveForm.get('from').value);
    let from = this.reactiveForm.controls["from"].value;
    let to = this.reactiveForm.controls["to"].value;
    let amount = this.reactiveForm.controls["amount"].value;
    
    this.message = String(this.wholeData.rates[to]/this.wholeData.rates[from]*amount)
    //this.curren.getConvertedValue(from, to, amount).subscribe((data)=>{
    //  console.log(data.rates, from , to, amount)
    //  this.message = String(data.rates[to])
    //})
    
    
  }

  currt:string='';

  selected(event:any){
   this.currt=event.target.value;
   console.log(this.currt);

  }
  
  
    ngOnInit() {
      this.reactiveForm = new FormGroup({
        from: new FormControl("", Validators.required),
        to: new FormControl("", Validators.required),
        amount: new FormControl("", Validators.required)
      });
      
        this.getcurrency();
      }

  }



