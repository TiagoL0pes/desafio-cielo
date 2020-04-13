import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoContaComponent } from './lancamento-conta.component';

describe('LancamentoContaComponent', () => {
  let component: LancamentoContaComponent;
  let fixture: ComponentFixture<LancamentoContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancamentoContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentoContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
