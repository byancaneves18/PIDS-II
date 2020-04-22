package com.equanime.equanime.controllers;

import java.sql.SQLException;
import java.util.List;

import com.equanime.equanime.models.ModeloDisciplina;
import com.equanime.equanime.models.ModeloPeriodo;
import com.equanime.equanime.persistencia.DaoDisciplina;
import com.equanime.equanime.persistencia.DaoPeriodo;



public class ManterDisciplina {

	private DaoDisciplina dao;
	private DaoPeriodo daoPeriodo;
	
	public ManterDisciplina() {
		
		
		dao = new DaoDisciplina();
		daoPeriodo = new DaoPeriodo();
		
	}
	
	
	
	public List<ModeloPeriodo> listarPeriodos() throws SQLException{
		
		return daoPeriodo.listar();
	}
	
	public List<ModeloDisciplina> listar() throws SQLException{
		
		return dao.listar();
		
	}
	
	
	public void criar(int id_periodo, String nome) throws SQLException {
		
		ModeloDisciplina novaDisciplina = new ModeloDisciplina( id_periodo, nome);
		
		dao.criar(novaDisciplina);
		
	}
	
	
	public ModeloDisciplina exibir(int id_disciplina) throws SQLException {
		
		
		return dao.exibir(id_disciplina);
	}
	
	public void excluir(int id_disciplina) throws SQLException {
		
		
		dao.excluir(id_disciplina);
	}
	
	public void editar(int id_disciplina, int id_periodo, String nome) throws SQLException {
		
		dao.editar(new ModeloDisciplina(id_disciplina, id_periodo, nome));
	}
	
	public ModeloPeriodo BuscarPeriodoPorId(String id) throws SQLException {
		
		
		return daoPeriodo.buscarPorId(id);
	}
	
	
	
}
