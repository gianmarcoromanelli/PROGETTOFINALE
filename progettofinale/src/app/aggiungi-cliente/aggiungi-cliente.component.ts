import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clienti } from '../classes/clienti';

import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-aggiungi-cliente',
  templateUrl: './aggiungi-cliente.component.html',
  styleUrls: ['./aggiungi-cliente.component.css']
})
export class AggiungiClienteComponent implements OnInit {

  clienti:Clienti=new Clienti();
  tipiCliente:string[]=[];

  constructor(private route:ActivatedRoute, 
              private clientiService:ClientiService,
              private router:Router) { }

  ngOnInit(): void {
    
    this.clientiService.tipoCliente().subscribe(data=>this.tipiCliente=data)
  }
  
  aggiungi(){  this.clientiService.aggiungiCliente(this.clienti).subscribe(clienti=>this.clienti=clienti);
    this.router.navigate(['clienti'])}

 
}


