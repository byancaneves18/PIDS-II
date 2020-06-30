package com.equanime.equanime.api;

import java.io.IOException;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.equanime.equanime.controllers.GerarRelatorios;

@RequestMapping("/relatorios")
@RestController
public class ApiGerarRelatorios {

	@Autowired
	private GerarRelatorios gerarRelatorios;
	
	@GetMapping(path = "texto")
	public String getPeriodos() throws SQLException{
					
			return gerarRelatorios.RelatorioDePedidosAtendidos();

	}
	
	@GetMapping(path = "arquivo")
	public ResponseEntity<byte[]> download() throws IOException {


	    return gerarRelatorios.ArquivoRelatorioDePedidosAtendidos();
	}
	
	
}
