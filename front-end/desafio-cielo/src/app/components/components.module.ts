import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { LancamentoContaComponent } from './lista-extrato-lancamento-conta/lancamento-conta/lancamento-conta.component';
import { ListaExtratoLancamentoContaComponent } from './lista-extrato-lancamento-conta/lista-extrato-lancamento-conta.component';

@NgModule({
  declarations: [
    ListaExtratoLancamentoContaComponent,
    LancamentoContaComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
