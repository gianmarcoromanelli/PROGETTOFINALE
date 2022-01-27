import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fatture } from '../classes/fatture';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-modifica-fattura',
  templateUrl: './modifica-fattura.component.html',
  styleUrls: ['./modifica-fattura.component.css']
})
export class ModificaFatturaComponent implements OnInit {
 
  fatture:Fatture=new Fatture();
  tipiCliente:string[]=[];
  statoFattura:string[]=[];

  constructor(private service:FattureService, 
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    
    this.service.tipoCliente().subscribe(data=>this.tipiCliente=data)
    this.service.statoFattura().subscribe(data=>this.statoFattura=data)

    this.route.params.subscribe(params=>{

      this.service.getFattureById(params['id']).subscribe(fatture=>{this.fatture=fatture})
    })
  }

  modificaFattura(){

    this.service.update(this.fatture).subscribe(fatture=>{this.fatture=fatture});
    this.router.navigate(['fatture']);

  }

}
