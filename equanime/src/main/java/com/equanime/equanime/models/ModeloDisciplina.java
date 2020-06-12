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
	private Long id;
	@Column(name= "id_periodo")
	private Long id_periodo;
	@Column(name= "nome")
	private String nome;
	@Column (name = "id_professor")
	private Long id_professor;
	
	
	/*public ModeloDisciplina(Long id_disciplina, int id_periodo, String nome) {
		
		this.id = id_disciplina;
		this.id_periodo = id_periodo;
		this.nome = nome;
		
		
		
	}*/
	
	public ModeloDisciplina(Long id_periodo, String nome) {
		
		this.id_periodo = id_periodo;
		this.nome = nome;
		this.id_professor =  (long) 99; //professor 99 é o valor default "sem professor"
		
		
		
	}
	
	
	public ModeloDisciplina() {

		
	}
	
	public Long getId_disciplina() {
		return id;
	}
	public void setId_disciplina(Long id_disciplina) {
		this.id = id_disciplina;
	}

	public Long getId_periodo() {
		return id_periodo;
	}
	public void setId_periodo(Long id_periodo) {
		this.id_periodo = id_periodo;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}

	public Long getId_professor() {
		return id_professor;
	}

	public void setId_professor(Long id_professor) {
		this.id_professor = id_professor;
	}
	
	
	
	
}
