import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Apartment} from "../../models/apartment";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApartementServiceService {

  constructor(
    private http :HttpClient
  ) { }
  testlog(){
    console.log("arctic");
  }
  checkListContent(list:any , criteria:string, value:any){
    let count=0;
    for(let i in list){
      if(list[i][criteria]==value){
        count++;
      }
    }
    return count;
  }

  addAppartement(appart:Apartment):Observable<Apartment[]>{
    return this.http.post<Apartment[]>('http://localhost:3000/appartement',appart)
  }
  getAppartement():Observable<Apartment[]>{
    return this.http.get<Apartment[]>('http://localhost:3000/appartement')
  }
  deleteAppart(id:any):Observable<Apartment[]>{
    return this.http.delete<Apartment[]>('http://localhost:3000/appartement/'+id)
  }
  updateAppart(id:any,appart:Apartment):Observable<Apartment[]>{
    return this.http.put<Apartment[]>('http://localhost:3000/appartement/'+id,appart)
  }
  getAppartById(id:any):Observable<Apartment[]>{
    return this.http.get<Apartment[]>('http://localhost:3000/appartement/'+id)
  }
}
