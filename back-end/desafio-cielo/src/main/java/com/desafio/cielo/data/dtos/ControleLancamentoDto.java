package com.desafio.cielo.data.dtos;

import java.math.BigDecimal;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;

import lombok.Data;

@Data
public class ControleLancamentoDto {

	private LancamentoContaCorrenteClienteDto lancamentoContaCorrenteCliente;
	private String dataEfetivaLancamento;
	private String dataLancamentoContaCorrenteCliente;
	private Long numeroEvento;
	private String descricaoGrupoPagamento;
	private String codigoIdentificadorUnico;
	private String nomeBanco;
	private Long quantidadeLancamentoRemessa;
	private String numeroRaizCNPJ;
	private String numeroSufixoCNPJ;
	private BigDecimal valorLancamentoRemessa;
	
	@JsonFormat(shape = Shape.NUMBER)
	private Date dateLancamentoContaCorrenteCliente;
	
	@JsonFormat(shape = Shape.NUMBER)
	private Date dateEfetivaLancamento;

}
