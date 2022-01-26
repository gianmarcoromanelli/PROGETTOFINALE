import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputClienteComponent } from './input-cliente.component';

describe('InputClienteComponent', () => {
  let component: InputClienteComponent;
  let fixture: ComponentFixture<InputClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
