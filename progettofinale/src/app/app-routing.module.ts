import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AggiungiClienteComponent } from './aggiungi-cliente/aggiungi-cliente.component';
import { AggiungiFatturaComponent } from './aggiungi-fattura/aggiungi-fattura.component';
import { ClientiDettaglioComponent } from './clienti-dettaglio/clienti-dettaglio.component';
import { ClientiComponent } from './clienti/clienti.component';
import { FattureDettaglioComponent } from './fatture-dettaglio/fatture-dettaglio.component';
import { FattureComponent } from './fatture/fatture.component';
import { HomeComponent } from './home/home.component';
import { InputClienteComponent } from './input-cliente/input-cliente.component';
import { ModificaFatturaComponent } from './modifica-fattura/modifica-fattura.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'clienti',component:ClientiComponent},
  {path:'clienti/:id', component:ClientiDettaglioComponent},
  {path:'aggiungiCliente',component:AggiungiClienteComponent},
  {path:'clientimodifica/:id',component:InputClienteComponent},
  {path:'fatture',component:FattureComponent},
  {path:'fatture/:id',component:FattureDettaglioComponent},
  {path:'aggiungiFattura',component:AggiungiFatturaComponent},
  {path:'modificaFattura/:id',component:ModificaFatturaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
