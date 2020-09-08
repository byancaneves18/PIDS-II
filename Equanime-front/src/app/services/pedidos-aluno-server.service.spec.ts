import { TestBed } from '@angular/core/testing';

import { PedidosAlunoServerService } from './pedidos-aluno-server.service';

describe('PedidosAlunoServerService', () => {
  let service: PedidosAlunoServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidosAlunoServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
