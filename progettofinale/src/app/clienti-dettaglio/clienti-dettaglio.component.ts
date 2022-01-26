import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clienti } from '../classes/clienti';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-clienti-dettaglio',
  templateUrl: './clienti-dettaglio.component.html',
  styleUrls: ['./clienti-dettaglio.component.css']
})
export class ClientiDettaglioComponent implements OnInit {
 
  clienti:Clienti=new Clienti();

  constructor(private clientiservice:ClientiService,
              private route :ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params=>{

      this.clientiservice.getClientiById(params['id']).subscribe(clienti=>{this.clienti=clienti})
    })
  }

}
