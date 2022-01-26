import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Clienti } from '../classes/clienti';
import { ClientiData } from '../interfaces/clienti-data';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  
  
  tenantID ='fe_0621';
  bearerToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA5ODIyMSwiZXhwIjoxNjQzOTYyMjIxfQ.2SgF85Ps7IQmx9oUKnLtukvC3Sy44rWsUEDUEIkFS2_M-8qVKzMkWEZDQgvVAexUUhp7G_vdbpUx75w3dlFVpQ';
 
  headers= new HttpHeaders();
  
  
  constructor(private http:HttpClient) { 

   this.headers=this.headers 

     .set("Authorization", 'Bearer ' + this.bearerToken)
     .set("X-TENANT-ID", this.tenantID)

     
 }

 getAllClienti(){
  return this.http.get<ClientiData>(environment.clienti,{headers :this.headers})
}

getClientiById(id:number){
  return this.http.get<Clienti>(environment.clientiById+id,{headers:this.headers})
}

rimuoviById(item:Clienti){

  return this.http.delete<Clienti>(environment.clientiById+item.id,{headers:this.headers})
}

update(obj:Clienti) {
  
  return this.http.put<Clienti>(environment.updateById+obj.id, obj, {headers: this.headers})
}

aggiungiCliente(obj:Clienti){

  return this.http.post<Clienti>(environment.aggiungiUtente,obj,{headers: this.headers})
}

tipoCliente(){

  return this.http.get<string[]>(environment.tipiCliente,{headers: this.headers})
}
  
}
