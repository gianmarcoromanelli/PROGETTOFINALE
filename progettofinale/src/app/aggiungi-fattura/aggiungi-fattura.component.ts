import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fatture } from '../classes/fatture';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-aggiungi-fattura',
  templateUrl: './aggiungi-fattura.component.html',
  styleUrls: ['./aggiungi-fattura.component.css']
})
export class AggiungiFatturaComponent implements OnInit {
  
  fatture:Fatture=new Fatture();
  tipiCliente:string[]=[];

  constructor(private service:FattureService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.tipoCliente().subscribe(data=>this.tipiCliente=data)
  }

  aggiungiFattura(){
   
    this.service.getNuovaFattura(this.fatture).subscribe(fatture=>this.fatture=fatture)
    this.router.navigate(['fatture']);
  }

}
