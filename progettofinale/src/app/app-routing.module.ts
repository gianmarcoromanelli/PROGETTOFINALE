import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AggiungiClienteComponent } from './aggiungi-cliente/aggiungi-cliente.component';
import { ClientiDettaglioComponent } from './clienti-dettaglio/clienti-dettaglio.component';
import { ClientiComponent } from './clienti/clienti.component';
import { HomeComponent } from './home/home.component';
import { InputClienteComponent } from './input-cliente/input-cliente.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'clienti',component:ClientiComponent},
  {path:'clienti/:id', component:ClientiDettaglioComponent},
  {path:'aggiungiCliente',component:AggiungiClienteComponent},
  {path:'clientimodifica/:id',component:InputClienteComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
