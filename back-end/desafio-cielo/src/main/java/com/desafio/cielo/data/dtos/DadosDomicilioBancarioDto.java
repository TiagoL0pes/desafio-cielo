package com.desafio.cielo.data.dtos;

import lombok.Data;

@Data
public class DadosDomicilioBancarioDto {

	private Long codigoBanco;
	private Long numeroAgencia;
	private String numeroContaCorrente;

}
