package com.desafio.cielo.data.dtos;

import java.math.BigDecimal;

import lombok.Data;

@Data
public class TotalControleLancamentoDto {

	private Integer quantidadeLancamentos;
	private Integer quantidadeRemessas;
	private BigDecimal valorLancamentos;

	public TotalControleLancamentoDto() {
		this.quantidadeLancamentos = 0;
		this.quantidadeRemessas = 0;
		this.valorLancamentos = BigDecimal.ZERO;
	}
}
