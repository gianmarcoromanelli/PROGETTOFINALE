import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clienti } from '../classes/clienti';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent implements OnInit {

  clienti:Clienti[]=[]
  
  constructor(private service:ClientiService , private router:Router) { }

  ngOnInit(): void {

    this.service.getAllClienti().subscribe(data=>this.clienti=data.content)
  }

  dettaglio(item:Clienti):void{

    this.router.navigate(['clienti/'+item.id])
}

  modifica(item:Clienti):void{
    this.router.navigate(['clientimodifica/'+item.id])
  }

  elimina(item:Clienti){
    this.service.rimuoviById(item).subscribe(data=>{this.clienti=this.clienti.filter(ele=> ele!==item)})
  }
}
