import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaExtratoLancamentoContaComponent } from './lista-extrato-lancamento-conta.component';

describe('ListaExtratoLancamentoContaComponent', () => {
  let component: ListaExtratoLancamentoContaComponent;
  let fixture: ComponentFixture<ListaExtratoLancamentoContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaExtratoLancamentoContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaExtratoLancamentoContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
