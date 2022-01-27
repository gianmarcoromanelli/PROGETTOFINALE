import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { updateLanguageServiceSourceFile } from 'typescript';
import { Clienti } from '../classes/clienti';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-input-cliente',
  templateUrl: './input-cliente.component.html',
  styleUrls: ['./input-cliente.component.css']
})
export class InputClienteComponent implements OnInit {
 
  clienti:Clienti=new Clienti();
  tipiCliente:string[]=[];

  constructor(private route:ActivatedRoute, 
              private clientiService:ClientiService,
              private router:Router) { 

    
  }

  ngOnInit(): void {
    this.clientiService.tipoCliente().subscribe(data=>this.tipiCliente=data)
    this.route.params.subscribe(params=>{

      this.clientiService.getClientiById(params['id']).subscribe(clienti=>{this.clienti=clienti})
    })
    
  
  }

  update(){  this.clientiService.update(this.clienti).subscribe(clienti=>this.clienti=clienti);
    this.router.navigate(['clienti'])
  
  }
 
  
}


