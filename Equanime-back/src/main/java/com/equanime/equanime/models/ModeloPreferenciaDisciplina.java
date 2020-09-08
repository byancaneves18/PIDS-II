package com.equanime.equanime.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="preferencia_disciplina")
public class ModeloPreferenciaDisciplina {
	
	
	@Id
	@GeneratedValue
	private Long id;
	@Column(name = "id_disciplina")
	private Long idDisciplina;
	@Column(name = "id_usuario")
	private Long idUsuario;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getIdDisciplina() {
		return idDisciplina;
	}
	public void setIdDisciplina(Long idDisciplina) {
		this.idDisciplina = idDisciplina;
	}
	public Long getIdUsuario() {
		return idUsuario;
	}
	public void setIdUsuario(Long idUsuario) {
		this.idUsuario = idUsuario;
	}

}
