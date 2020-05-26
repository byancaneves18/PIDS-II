package com.equanime.equanime.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@SuppressWarnings("serial")
@Entity
@Table(name="disciplina")
public class ModeloDisciplina implements Serializable {


	@Id
	@GeneratedValue
	private Long id_disciplina;
	@Column(name= "id_periodo")
	private int id_periodo;
	@Column(name= "nome")
	private String nome;
	
	
	public ModeloDisciplina(Long id_disciplina, int id_periodo, String nome) {
		
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
	
	public Long getId_disciplina() {
		return id_disciplina;
	}
	public void setId_disciplina(Long id_disciplina) {
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
