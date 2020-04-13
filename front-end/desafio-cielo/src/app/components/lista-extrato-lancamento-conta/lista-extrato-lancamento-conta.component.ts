import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { merge } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MatPaginatorIntlConfig } from 'src/app/shared/configs/mat-paginator-intl-config';
import { ExtratoLancamentoContaDatasource } from 'src/app/shared/datasources/extrato-lancamento-conta-datasource';
import { ControleLancamento } from 'src/app/shared/models/controle-lancamento';
import { ExtratoLancamentoContaService } from 'src/app/shared/services/extrato-lancamento-conta.service';

@Component({
  selector: 'app-lista-extrato-lancamento-conta',
  templateUrl: './lista-extrato-lancamento-conta.component.html',
  styleUrls: ['./lista-extrato-lancamento-conta.component.scss'],
  providers: [{ provide: MatPaginatorIntl, useClass: MatPaginatorIntlConfig }]
})
export class ListaExtratoLancamentoContaComponent implements OnInit, AfterViewInit {
  dataSource: ExtratoLancamentoContaDatasource;
  displayedColumns: string[] = ['dataLancamento', 'descricao', 'numero', 'situacao', 'dataConfirmacao', 'dadosBancarios', 'valorFinal'];

  @ViewChild(MatPaginator, { static: false })
  paginator: MatPaginator;

  constructor(
    private service: ExtratoLancamentoContaService
  ) { }

  ngOnInit(): void {
    this.dataSource = new ExtratoLancamentoContaDatasource(this.service);
    this.dataSource.buscarLancamentos();
  }

  ngAfterViewInit(): void {
    merge(this.paginator.page)
      .pipe(
        tap(() => this.dataSource.buscarLancamentos())
      ).subscribe();
  }

  dadosBancariosCliente(lancamento: ControleLancamento): string {
    return `${lancamento.nomeBanco.trim()} 
      Ag ${lancamento.lancamentoContaCorrenteCliente.dadosDomicilioBancario.numeroAgencia}
      CC ${lancamento.lancamentoContaCorrenteCliente.dadosDomicilioBancario.numeroContaCorrente}`;
  }

}
