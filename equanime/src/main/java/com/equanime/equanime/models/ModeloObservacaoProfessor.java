package com.equanime.equanime.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="observacao_professor")
public class ModeloObservacaoProfessor {
	
	@Id
	@GeneratedValue
	private Long id;
	@Column(name= "id_professor")
	private Long id_professor;
	@Column(name= "observacao")
	private String observacao;
	@Column(name= "atendido")
	private boolean atendido;
	
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getId_professor() {
		return id_professor;
	}
	public void setId_professor(Long id_professor) {
		this.id_professor = id_professor;
	}
	public String getObservacao() {
		return observacao;
	}
	public void setObservacao(String observacao) {
		this.observacao = observacao;
	}
	public boolean isAtendido() {
		return atendido;
	}
	public void setAtendido(boolean atendido) {
		this.atendido = atendido;
	}

}
