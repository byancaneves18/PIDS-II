package com.equanime.equanime.models;

public class ModeloDisciplina {


	private int id_disciplina;
	private int id_periodo;
	private String nome;
	
	
	public ModeloDisciplina(int id_disciplina, int id_periodo, String nome) {
		
		this.id_disciplina = id_disciplina;
		this.id_periodo = id_periodo;
		this.nome = nome;
		
		
		
	}
	
	public ModeloDisciplina(int id_periodo, String nome) {
		
		this.id_periodo = id_periodo;
		this.nome = nome;
		
		
		
	}
	
	
	public ModeloDisciplina() {

		
	}
	
	public int getId_disciplina() {
		return id_disciplina;
	}
	public void setId_disciplina(int id_disciplina) {
		this.id_disciplina = id_disciplina;
	}

	public int getId_periodo() {
		return id_periodo;
	}
	public void setId_periodo(int id_periodo) {
		this.id_periodo = id_periodo;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	
	
	
}
