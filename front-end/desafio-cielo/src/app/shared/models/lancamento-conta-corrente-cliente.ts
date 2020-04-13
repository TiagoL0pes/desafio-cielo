import { DadosAnaliticoLancamentoFinanceiroCliente } from './dados-analitico-lancamento-financeiro-cliente';
import { DadosDomicilioBancario } from './dados-domicilio-bancario';

export class LancamentoContaCorrenteCliente {
    numeroRemessaBanco: number;
    dadosAnaliticoLancamentoFinanceiroCliente: DadosAnaliticoLancamentoFinanceiroCliente[];
    nomeSituacaoRemessa: string;
    dadosDomicilioBancario: DadosDomicilioBancario;
    nomeTipoOperacao: string;

    constructor() {
        this.dadosAnaliticoLancamentoFinanceiroCliente = new Array();
        this.dadosDomicilioBancario = new DadosDomicilioBancario();
    }
}
