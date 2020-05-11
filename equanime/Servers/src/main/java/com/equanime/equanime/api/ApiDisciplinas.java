package com.equanime.equanime.api;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.validation.ValidationException;

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
	public List<ModeloPeriodo> getPeriodos() throws SQLException{
			return manterDisciplina.listarPeriodos();

	}
	
	@GetMapping(path = "disciplinas")
	public List<ModeloDisciplina> getDisciplinas() throws SQLException{
		
			return manterDisciplina.listar();
	}
	
	@PostMapping(path = "periodoById")
	public ModeloPeriodo getPeriodoById(@RequestBody String id) throws SQLException{

			return manterDisciplina.BuscarPeriodoPorId(id);

	}
	
	
	@PostMapping(path = "novaDisciplina")
	public void novaDisciplina(@RequestBody ModeloDisciplina disciplina) throws ValidationException, SQLException{
		
			manterDisciplina.criar(disciplina);
	}
	
	@PostMapping(path = "atualizarDisciplina")
	public void atualizarDisciplina(@RequestBody ModeloDisciplina disciplina) throws ValidationException, SQLException{

			manterDisciplina.editar(disciplina);
	}
	
	
	@PostMapping(path = "disciplinaById")
	public ModeloDisciplina getDisciplinaById(@RequestBody String id) throws NumberFormatException, SQLException{
		
			return manterDisciplina.exibir(Integer.parseInt(id));

	}
	
	@PostMapping(path = "excluirDisciplinaById")
	public void excluirDisciplinaById(@RequestBody int id) throws SQLException{

			 manterDisciplina.excluir(id);

	}
	
}
