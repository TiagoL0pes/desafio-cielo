package com.desafio.cielo.rest.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.desafio.cielo.data.dtos.ControleLancamentoDto;
import com.desafio.cielo.data.dtos.ExtratoLancamentoContaDto;

@Service
public class ExtratoLancamentoContaService {

	public ControleLancamentoDto detalhar(Long id) {
		String codigo = String.valueOf(id);
		ResponseEntity<ExtratoLancamentoContaDto> response = buscarListagemLancamentos();

		if (response.getStatusCode().value() == 200) {
			List<ControleLancamentoDto> lista = new ArrayList<>();
			response.getBody().getListaControleLancamento().stream().forEach(lancamento -> {
				if (lancamento.getCodigoIdentificadorUnico().equals(codigo)) {
					lista.add(lancamento);
				}
			});

			if (lista.size() == 1) {
				return lista.get(0);
			}
		}

		return null;
	}

	public ExtratoLancamentoContaDto listar() {
		ResponseEntity<ExtratoLancamentoContaDto> response = buscarListagemLancamentos();

		if (response.getStatusCode().value() == 200) {
			return response.getBody();
		}

		return null;
	}

	public ResponseEntity<ExtratoLancamentoContaDto> buscarListagemLancamentos() {
		RestTemplate client = new RestTemplate();
		return client.exchange("http://localhost:8080/resource/lancamento-conta-legado.json", HttpMethod.GET, null,
				ExtratoLancamentoContaDto.class);
	}
}
