import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable } from 'rxjs';
import { ControleLancamento } from '../models/controle-lancamento';
import { ExtratoLancamentoConta } from '../models/extrato-lancamento-conta';
import { ExtratoLancamentoContaService } from '../services/extrato-lancamento-conta.service';

export class ExtratoLancamentoContaDatasource implements DataSource<ControleLancamento> {
    private lancamentoSubject = new BehaviorSubject<ControleLancamento[]>([]);
    public lancamentos: ControleLancamento[];
    public totalElements: number;

    constructor(
        private service: ExtratoLancamentoContaService
    ) { }

    buscarLancamentos() {
        this.service.listar()
            .subscribe((retorno: ExtratoLancamentoConta) => {
                this.gravarLancamentos(retorno);
                this.totalElements = retorno.totalElements;
                this.lancamentoSubject.next(this.lancamentos);
            }, error => {
                console.error(error);
                this.lancamentoSubject.next([]);
            });
    }

    connect(collectionViewer: CollectionViewer): Observable<ControleLancamento[]> {
        return this.lancamentoSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.lancamentoSubject.complete();
    }

    gravarLancamentos(retorno) {
        localStorage.getItem('lancamentos') ?
            this.lancamentos = JSON.parse(localStorage.getItem('lancamentos')) :
            localStorage.setItem('lancamentos', JSON.stringify(retorno.listaControleLancamento));

        this.lancamentos = JSON.parse(localStorage.getItem('lancamentos'));
    }

}