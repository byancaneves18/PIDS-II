package com.equanime.equanime.api;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.equanime.equanime.controllers.ManterDisciplina;
import com.equanime.equanime.models.ModeloDisciplina;
import com.equanime.equanime.models.ModeloPeriodo;


@RequestMapping("/api")
@RestController
public class ApiDisciplinas {


	ManterDisciplina manterDisciplina;
	
	
	@Autowired
	public ApiDisciplinas() {
		
		manterDisciplina = new ManterDisciplina();
	}
	
	
	@GetMapping(path = "periodos")
	public List<ModeloPeriodo> getPeriodos(){
		try {
			return manterDisciplina.listarPeriodos();
		} catch (SQLException e) {
			e.printStackTrace();
			List<ModeloPeriodo> listaDePeriodos = new ArrayList<>();
			listaDePeriodos.add(new ModeloPeriodo(0, "erro"));
			return listaDePeriodos;
		}
	}
	
	@GetMapping(path = "disciplinas")
	public List<ModeloDisciplina> getDisciplinas(){
		
		try {
			return manterDisciplina.listar();
		} catch (SQLException e) {
			e.printStackTrace();
			List<ModeloDisciplina> listaDeDisciplinas = new ArrayList<>();
			listaDeDisciplinas.add(new ModeloDisciplina(0,0, "erro"));
			return listaDeDisciplinas;
		}
	}
	
	@PostMapping(path = "periodoById")
	public ModeloPeriodo getPeriodoById(@RequestBody String id){
		
		System.out.println("Get recebido");
		try {
			return manterDisciplina.BuscarPeriodoPorId(id);
		} catch (SQLException e) {
			e.printStackTrace();	
			return new ModeloPeriodo(0, "erro");
		}
	}
	
	
}
