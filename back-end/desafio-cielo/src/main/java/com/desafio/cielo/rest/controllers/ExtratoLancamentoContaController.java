package com.desafio.cielo.rest.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.desafio.cielo.data.dtos.ControleLancamentoDto;
import com.desafio.cielo.data.dtos.ExtratoLancamentoContaDto;
import com.desafio.cielo.rest.services.ExtratoLancamentoContaService;

@RestController
@RequestMapping("/extrato/lancamento")
public class ExtratoLancamentoContaController {

	@Autowired
	private ExtratoLancamentoContaService service;

	@CrossOrigin("*")
	@GetMapping("{id}")
	public ResponseEntity<ControleLancamentoDto> detalhar(@PathVariable Long id) {
		ControleLancamentoDto lancamento = service.detalhar(id);
		if (lancamento != null) {
			return ResponseEntity.ok(lancamento);
		}

		return ResponseEntity.notFound().build();
	}

	@CrossOrigin("*")
	@GetMapping
	public ResponseEntity<ExtratoLancamentoContaDto> listar() {
		ExtratoLancamentoContaDto retorno = service.listar();
		if (retorno != null) {
			return ResponseEntity.ok(retorno);
		}

		return ResponseEntity.ok(new ExtratoLancamentoContaDto());
	}
}
