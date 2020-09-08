package com.equanime.equanime.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.equanime.equanime.models.ModeloDisciplina;
import com.equanime.equanime.repository.DisciplinaRepository;

@RestController
public class VincularProfessorDisciplina {
	
	@Autowired
	private DisciplinaRepository repository;

	@RequestMapping(value="/vincular/salvar" ,method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<Filtro> vincular(@RequestBody Filtro filtro) {
		List<ModeloDisciplina> modelo = filtro.getDisciplina();
		modelo.stream().forEach(item -> item.setId_professor(filtro.getUsuario().getId()));
		repository.saveAll(modelo);
		return new ResponseEntity<Filtro>(HttpStatus.OK);
	}
	
	@RequestMapping(value="/vincular", method = RequestMethod.GET)
	@ResponseBody
	public String process() {
		return "VINCULAR";
	}
}
