import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPedidosComponent } from './registrar-pedidos.component';

describe('RegistrarPedidosComponent', () => {
  let component: RegistrarPedidosComponent;
  let fixture: ComponentFixture<RegistrarPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
