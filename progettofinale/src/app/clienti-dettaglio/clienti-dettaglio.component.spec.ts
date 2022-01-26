import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientiDettaglioComponent } from './clienti-dettaglio.component';

describe('ClientiDettaglioComponent', () => {
  let component: ClientiDettaglioComponent;
  let fixture: ComponentFixture<ClientiDettaglioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientiDettaglioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientiDettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
