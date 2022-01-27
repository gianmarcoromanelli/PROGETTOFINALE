import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fatture } from '../classes/fatture';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-fatture-dettaglio',
  templateUrl: './fatture-dettaglio.component.html',
  styleUrls: ['./fatture-dettaglio.component.css']
})
export class FattureDettaglioComponent implements OnInit {
 
  fatture:Fatture=new Fatture();

  constructor(private service:FattureService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params=>{

      this.service.getFattureById(params['id']).subscribe(fatture=>{this.fatture=fatture})
    })
  }

}
