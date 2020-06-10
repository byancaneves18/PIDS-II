import { TestBed } from '@angular/core/testing';

import { EventEmmiterService } from './event-emitter.service';

describe('EventEmmiterService', () => {
  let service: EventEmmiterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventEmmiterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
