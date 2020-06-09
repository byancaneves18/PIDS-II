import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontarHorarioComponent } from './montar-horario.component';

describe('MontarHorarioComponent', () => {
  let component: MontarHorarioComponent;
  let fixture: ComponentFixture<MontarHorarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontarHorarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontarHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
