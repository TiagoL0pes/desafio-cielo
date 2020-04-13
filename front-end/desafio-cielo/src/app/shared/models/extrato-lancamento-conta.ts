import { ControleLancamento } from './controle-lancamento';
import { TotalControleLancamento } from './total-controle-lancamento';

export class ExtratoLancamentoConta {
	totalControleLancamento: TotalControleLancamento;
	listaControleLancamento: ControleLancamento[] = [];
	indice: number;
	tamanhoPagina: number;
	totalElements: number;
}