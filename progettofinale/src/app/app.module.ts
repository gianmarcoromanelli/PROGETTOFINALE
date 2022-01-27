import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientiComponent } from './clienti/clienti.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ClientiDettaglioComponent } from './clienti-dettaglio/clienti-dettaglio.component';
import { InputClienteComponent } from './input-cliente/input-cliente.component';
import { FormsModule } from '@angular/forms';
import { AggiungiClienteComponent } from './aggiungi-cliente/aggiungi-cliente.component';
import { FattureComponent } from './fatture/fatture.component';
import { FattureDettaglioComponent } from './fatture-dettaglio/fatture-dettaglio.component';
import { AggiungiFatturaComponent } from './aggiungi-fattura/aggiungi-fattura.component';
import { ModificaFatturaComponent } from './modifica-fattura/modifica-fattura.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientiComponent,
    HomeComponent,
    ClientiDettaglioComponent,
    InputClienteComponent,
    AggiungiClienteComponent,
    FattureComponent,
    FattureDettaglioComponent,
    AggiungiFatturaComponent,
    ModificaFatturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
