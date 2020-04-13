import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ControleLancamento } from '../models/controle-lancamento';
import { ExtratoLancamentoConta } from '../models/extrato-lancamento-conta';

@Injectable({
  providedIn: 'root'
})
export class ExtratoLancamentoContaService {

  constructor(private http: HttpClient) { }

  detalhar(id: number): Observable<ControleLancamento> {
    return this.http.get<ControleLancamento>(`${environment.api}/extrato/lancamento/${id}`);
  }

  listar(): Observable<ExtratoLancamentoConta> {
    return this.http.get<ExtratoLancamentoConta>(`${environment.api}/extrato/lancamento`);
  }
}
