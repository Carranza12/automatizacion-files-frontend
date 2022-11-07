import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private _http:HttpClient) { }

  createJSON(jsonForm:any){
    let json = JSON.stringify(jsonForm)
    console.log(json)
    try {
      this._http.post('http://localhost:3000/json/crear',jsonForm).subscribe(res => console.log(res));
    } catch (error) {
      console.log(error)
    }
   
  }
}
