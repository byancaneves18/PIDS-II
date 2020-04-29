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
		
		try {
			return manterDisciplina.BuscarPeriodoPorId(id);
		} catch (SQLException e) {
			e.printStackTrace();	
			return new ModeloPeriodo(0, "erro");
		}
	}
	
	
	@PostMapping(path = "novaDisciplina")
	public void novaDisciplina(@RequestBody ModeloDisciplina disciplina){
		
		try {
			//return manterDisciplina.BuscarPeriodoPorId(id);
			manterDisciplina.criar(disciplina);
		} catch (SQLException e) {
			e.printStackTrace();	
			//return new ModeloPeriodo(0, "erro");
		}
	}
	
	@PostMapping(path = "atualizarDisciplina")
	public void atualizarDisciplina(@RequestBody ModeloDisciplina disciplina){
		System.out.println("Solicitação de alteração recebida");
		try {
			//return manterDisciplina.BuscarPeriodoPorId(id);
			manterDisciplina.editar(disciplina);
		} catch (SQLException e) {
			e.printStackTrace();	
			//return new ModeloPeriodo(0, "erro");
		}
	}
	
	
	@PostMapping(path = "disciplinaById")
	public ModeloDisciplina getDisciplinaById(@RequestBody String id){
		
		try {
			return manterDisciplina.exibir(Integer.parseInt(id));
		} catch (SQLException e) {
			e.printStackTrace();	
			return new ModeloDisciplina();
		}
	}
	
	@PostMapping(path = "excluirDisciplinaById")
	public void excluirDisciplinaById(@RequestBody int id){
		
		try {
			 manterDisciplina.excluir(id);
		} catch (SQLException e) {
			e.printStackTrace();	
		}
	}
	
}
