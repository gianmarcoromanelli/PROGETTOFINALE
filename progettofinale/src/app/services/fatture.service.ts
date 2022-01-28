import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Clienti } from '../classes/clienti';
import { Fatture } from '../classes/fatture';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

  tenantID ='fe_0621';
  bearerToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA5ODIyMSwiZXhwIjoxNjQzOTYyMjIxfQ.2SgF85Ps7IQmx9oUKnLtukvC3Sy44rWsUEDUEIkFS2_M-8qVKzMkWEZDQgvVAexUUhp7G_vdbpUx75w3dlFVpQ';
 
  headers= new HttpHeaders();
  constructor(private http:HttpClient) { 
    this.headers=this.headers 

     .set("Authorization", 'Bearer ' + this.bearerToken)
     .set("X-TENANT-ID", this.tenantID)
  }


  getFatture(){

    return this.http.get<Fatture>(environment.fatture,{headers:this.headers})
  }


  getFattureById(id:number){

    return this.http.get<Fatture>(environment.fattureById+id ,{headers: this.headers})
  }

  getNuovaFattura(obj:Fatture){

    return this.http.post<Fatture>(environment.aggiungiFatture,obj ,{headers:this.headers})
  }
  
  update(obj:Fatture){

    return this.http.put<Fatture>(environment.fattureById+obj.id,obj,{headers:this.headers})
  }

  

  tipoCliente(){

    return this.http.get<string[]>(environment.tipiCliente,{headers: this.headers})
  }
  
  statoFattura(){

    return this.http.get<string[]>(environment.statoFattura,{headers: this.headers})
  }

  rimuoviFattura(item:Fatture){
    return this.http.delete(environment.fattureById+ item.id,{headers: this.headers})
  }

 
  
}
