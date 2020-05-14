import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class CurrencyexchangeService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{

    const  url='https://api.frankfurter.app/latest'

    return this.http.get<any>(url)
    
  }

  getConvertedValue(from: String, to: String, amount: Number):Observable<any>{

    const url=`https://api.frankfurter.app/latest?from=${from}&to=${to}&amount=${amount}`

    return this.http.get<any>(url)
    
  }

  getChartValue(from :String,to:String, date:String){

    const url=`https://api.frankfurter.app/${date}..?from=${from}&to=${to}`;
     return this.http.get(url)
      .map(result=> result);
      
  }

  }

  


