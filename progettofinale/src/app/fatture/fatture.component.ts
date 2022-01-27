import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fatture } from '../classes/fatture';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent implements OnInit {
 
  fatture:Fatture[]=[];

  constructor(private service:FattureService, private route:Router) { }

  ngOnInit(): void {

    this.service.getFatture().subscribe(data=>this.fatture=data.content)
  }

  dettaglio(item:Fatture):void{

    this.route.navigate(['fatture/'+item.id]);
}

 modifica(item:Fatture):void{

  this.route.navigate(['modificaFattura/'+item.id])
 }

 elimina(item:Fatture):void{
  this.service.rimuoviFattura(item).subscribe(data=>{this.fatture=this.fatture.filter(ele=> ele!==item)})
   

 }
}
