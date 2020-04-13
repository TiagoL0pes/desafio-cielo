package com.desafio.cielo.data.dtos;

import java.util.List;

import lombok.Data;

@Data
public class LancamentoContaCorrenteClienteDto {

	private Long numeroRemessaBanco;
	private List<DadosAnaliticoLancamentoFinanceiroClienteDto> dadosAnaliticoLancamentoFinanceiroCliente;
	private String nomeSituacaoRemessa;
	private DadosDomicilioBancarioDto dadosDomicilioBancario;
	private String nomeTipoOperacao;

}
