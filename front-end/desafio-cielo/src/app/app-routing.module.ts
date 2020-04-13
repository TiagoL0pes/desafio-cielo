import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentoContaComponent } from './components/lista-extrato-lancamento-conta/lancamento-conta/lancamento-conta.component';
import { ListaExtratoLancamentoContaComponent } from './components/lista-extrato-lancamento-conta/lista-extrato-lancamento-conta.component';


const routes: Routes = [
  {
    path: 'extrato/lancamentos',
    component: ListaExtratoLancamentoContaComponent
  },
  {
    path: 'lancamento/conta',
    component: LancamentoContaComponent
  },
  {
    path: 'lancamento/conta/:id',
    component: LancamentoContaComponent
  },
  {
    path: '**',
    component: ListaExtratoLancamentoContaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
