import { TestBed } from '@angular/core/testing';

import { ServerComunicationService } from './server-comunication.service';

describe('ServerComunicationService', () => {
  let service: ServerComunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerComunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
