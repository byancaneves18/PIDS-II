package com.equanime.equanime.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="disponibilidade_professor")
public class ModeloDisponibilidadeProfessor {

	@Id
	@GeneratedValue
	private Long id;
	
	@Column(name="id_usuario")
	private Long idUsuario;
	
	@Column(name="id_semana")
	private Long idSemana;
	
	@Column(name="id_turno")
	private Long idTurno;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(Long idUsuario) {
		this.idUsuario = idUsuario;
	}

	public Long getIdSemana() {
		return idSemana;
	}

	public void setIdSemana(Long idSemana) {
		this.idSemana = idSemana;
	}

	public Long getIdTurno() {
		return idTurno;
	}

	public void setIdTurno(Long idTurno) {
		this.idTurno = idTurno;
	}

	
	
}
