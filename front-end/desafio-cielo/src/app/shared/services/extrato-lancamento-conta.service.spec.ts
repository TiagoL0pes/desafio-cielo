import { TestBed } from '@angular/core/testing';

import { ExtratoLancamentoContaService } from './extrato-lancamento-conta.service';

describe('ExtratoLancamentoContaService', () => {
  let service: ExtratoLancamentoContaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtratoLancamentoContaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
