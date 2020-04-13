package com.desafio.cielo.data.dtos;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class ExtratoLancamentoContaDto {

	private TotalControleLancamentoDto totalControleLancamento;
	private List<ControleLancamentoDto> listaControleLancamento;
	private Long indice;
	private Long tamanhoPagina;
	private Long totalElements;

	public ExtratoLancamentoContaDto() {
		this.totalControleLancamento = new TotalControleLancamentoDto();
		this.listaControleLancamento = new ArrayList<>();
		this.indice = 0L;
		this.tamanhoPagina = 0L;
		this.totalElements = 0L;
	}
}
