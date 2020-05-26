package com.equanime.equanime.controllers;

import java.sql.SQLException;
import java.util.Optional;

import javax.validation.ValidationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.equanime.equanime.models.ModeloDisciplina;
import com.equanime.equanime.models.ModeloPeriodo;
import com.equanime.equanime.repository.DisciplinaRepository;
import com.equanime.equanime.repository.PeriodoRepository;


@Controller
public class ManterDisciplina {

	@Autowired
	private DisciplinaRepository repository;
	@Autowired
	private PeriodoRepository repositoryPeriodo;
	
	public ManterDisciplina() {
		
		
	}
	
	
	
	public Iterable<ModeloPeriodo> listarPeriodos() throws SQLException{
		
			return repositoryPeriodo.findAll();

	}
	
	public Iterable<ModeloDisciplina> listarDisciplinas() throws SQLException {
		
		
		return repository.findAll();
		
	}
	
	
	public void criar(ModeloDisciplina disciplina) throws SQLException, ValidationException {
		
		
		if(disciplina==null) {
			
			throw new ValidationException("A função criar precisa receber um objeto do tipo disciplina não nulo");
			
		}else if(isStringNullOrWhiteSpace(disciplina.getNome())) {
			System.out.println("Sem nome");
			throw new ValidationException("O campo nome precisa estar corretamente preenchido");
		}else {
		
			System.out.println("Nome: "+disciplina.getNome());
			ModeloDisciplina novaDisciplina = new ModeloDisciplina(disciplina.getId_periodo(),disciplina.getNome());
			
			repository.save(novaDisciplina);
			
		}
		
	}
	
	
	public Optional<ModeloDisciplina> buscarPorId(String id_disciplina) throws SQLException {
		
		Long id = Long.parseLong(id_disciplina);
		
		return repository.findById(id);
	}
	
	public void excluir(String id_disciplina) throws SQLException  {
		
		Long id = Long.parseLong(id_disciplina);	
		repository.deleteById(id);
	}
	
	public void editar(ModeloDisciplina disciplina) throws SQLException, ValidationException{
		
		
		if(disciplina==null) {
			
			throw new ValidationException("A função criar precisa receber um objeto do tipo disciplina não nulo");
			
		}else if(isStringNullOrWhiteSpace(disciplina.getNome())) {
			
			throw new ValidationException("O campo nome precisa estar corretamente preenchido");
		}else {
		
			repository.save(disciplina);
		}
	}
	
	
	
	public Optional<ModeloPeriodo> BuscarPeriodoPorId(String id) throws SQLException {
		
		Long idLong = Long.parseLong(id);
		return repositoryPeriodo.findById(idLong);
		
	}
	
	
	
	
	public static boolean isStringNullOrWhiteSpace(String value) {
	    if (value == null) {
	        return true;
	    }

	    for (int i = 0; i < value.length(); i++) {
	        if (!Character.isWhitespace(value.charAt(i))) {
	            return false;
	        }
	    }

	    return true;
	}
	
}
