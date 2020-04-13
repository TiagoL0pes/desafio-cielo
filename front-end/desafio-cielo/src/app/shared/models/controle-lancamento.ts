import { LancamentoContaCorrenteCliente } from './lancamento-conta-corrente-cliente';

export class ControleLancamento {
    lancamentoContaCorrenteCliente: LancamentoContaCorrenteCliente;
    dataEfetivaLancamento: string;
    dataLancamentoContaCorrenteCliente: string;
    numeroEvento: number;
    descricaoGrupoPagamento: string;
    codigoIdentificadorUnico: string;
    nomeBanco: string;
    quantidadeLancamentoRemessa: number;
    numeroRaizCNPJ: string;
    numeroSufixoCNPJ: string;
    valorLancamentoRemessa: number;
    dateLancamentoContaCorrenteCliente: Date;
    dateEfetivaLancamento: Date;

    constructor() {
        this.lancamentoContaCorrenteCliente = new LancamentoContaCorrenteCliente();
    }
}
