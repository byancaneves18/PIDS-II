import { TestBed } from '@angular/core/testing';

import { DisciplinasServerComunicationService } from './disciplinas-server-comunication.service';

describe('ServerComunicationService', () => {
  let service: DisciplinasServerComunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisciplinasServerComunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
