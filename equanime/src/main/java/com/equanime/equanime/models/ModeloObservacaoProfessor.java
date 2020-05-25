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
	private int id;
	@Column(name= "id_professor")
	private int id_professor;
	@Column(name= "observacao")
	private String observacao;
	@Column(name= "atendido")
	private boolean atendido;

}
