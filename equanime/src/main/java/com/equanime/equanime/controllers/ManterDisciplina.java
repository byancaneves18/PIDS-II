package com.equanime.equanime.controllers;

import java.sql.SQLException;
import java.util.List;

import javax.validation.ValidationException;

import org.springframework.beans.factory.annotation.Autowired;

import com.equanime.equanime.models.ModeloDisciplina;
import com.equanime.equanime.models.ModeloPeriodo;
import com.equanime.equanime.persistencia.DaoDisciplina;
import com.equanime.equanime.persistencia.DaoPeriodo;
import com.equanime.equanime.repository.DisciplinaRepository;



public class ManterDisciplina {

	@Autowired
	private DisciplinaRepository repository;
	private DaoDisciplina dao;
	private DaoPeriodo daoPeriodo;
	
	public ManterDisciplina() {
		
		
		dao = new DaoDisciplina();
		daoPeriodo = new DaoPeriodo();
		
	}
	
	
	
	public List<ModeloPeriodo> listarPeriodos() throws SQLException{
		
		try {
			return daoPeriodo.listar();
		}catch(SQLException e) {
			System.out.println(e.getMessage());
			e.printStackTrace();
			throw new SQLException("Erro ao buscar periodos disponiveis no banco de dados :"+e.getMessage());
		}
	}
	
	/*public Iterable<ModeloDisciplina> listar() throws SQLException {
		
		
		return repository.findAll();
		
	}*/
	
	public List<ModeloDisciplina> listar() throws SQLException {
		
		try {
			return dao.listar();
		}catch(SQLException e) {
			System.out.println(e.getMessage());
			e.printStackTrace();
			throw new SQLException("Erro ao buscar lista de disciplinas no banco de dados :"+e.getMessage());
		}
		
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
			
			try{
				dao.criar(novaDisciplina);
			}catch(SQLException e){
				System.out.println(e.getMessage());
				e.printStackTrace();
				throw new SQLException("Erro ao introduzir dados no banco de dados :"+e.getMessage());
			}
			
		}
		
	}
	
	
	public ModeloDisciplina exibir(int id_disciplina) throws SQLException {
		
		try {
			return dao.exibir(id_disciplina);
		}catch(SQLException e) {
			System.out.println(e.getMessage());
			e.printStackTrace();
			throw new SQLException("Erro ao buscar disciplina no banco de dados :"+e.getMessage());
		}
	}
	
	public void excluir(int id_disciplina) throws SQLException  {
		
		try {
			dao.excluir(id_disciplina);
		}catch(SQLException e) {
			System.out.println(e.getMessage());
			e.printStackTrace();
			throw new SQLException("Erro ao excluir disciplina no banco de dados :"+e.getMessage());
		}
	}
	
	public void editar(ModeloDisciplina disciplina) throws SQLException, ValidationException{
		
		
		if(disciplina==null) {
			
			throw new ValidationException("A função criar precisa receber um objeto do tipo disciplina não nulo");
			
		}else if(isStringNullOrWhiteSpace(disciplina.getNome())) {
			
			throw new ValidationException("O campo nome precisa estar corretamente preenchido");
		}else {
		
			try {
				dao.editar(new ModeloDisciplina(disciplina.getId_disciplina(), disciplina.getId_periodo(), disciplina.getNome()));
			}catch(SQLException e) {
				System.out.println(e.getMessage());
				e.printStackTrace();
				throw new SQLException("Erro ao excluir disciplina no banco de dados :"+e.getMessage());			
			}
		}
	}
	
	public ModeloPeriodo BuscarPeriodoPorId(String id) throws SQLException {
		
		try {
			return daoPeriodo.buscarPorId(id);
		}catch(SQLException e) {
			System.out.println(e.getMessage());
			e.printStackTrace();
			throw new SQLException("Erro ao buscar periodo no banco de dados :"+e.getMessage());
		}
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
