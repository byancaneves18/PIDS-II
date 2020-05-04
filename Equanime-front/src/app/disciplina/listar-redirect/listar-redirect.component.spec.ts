import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRedirectComponent } from './listar-redirect.component';

describe('ListarRedirectComponent', () => {
  let component: ListarRedirectComponent;
  let fixture: ComponentFixture<ListarRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
