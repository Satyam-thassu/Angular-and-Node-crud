import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  constructor(private http:HttpClient) { }

  getdata():Observable<any>
  {
    return this.http.get("http://localhost:10020/getAll")
  }

  post(value:any):Observable<any>
  {
    return this.http.post("http://localhost:10020/post",value)
  }

  delete(value:any):Observable<any>
  {
    console.log(value);
    return this.http.delete(`http://localhost:10020/deletebyId/${value}`)
  }

  
}
