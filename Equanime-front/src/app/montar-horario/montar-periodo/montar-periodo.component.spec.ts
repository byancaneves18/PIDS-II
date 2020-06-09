import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontarPeriodoComponent } from './montar-periodo.component';

describe('MontarPeriodoComponent', () => {
  let component: MontarPeriodoComponent;
  let fixture: ComponentFixture<MontarPeriodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontarPeriodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontarPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
