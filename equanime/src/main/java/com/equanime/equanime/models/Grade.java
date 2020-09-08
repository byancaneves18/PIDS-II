package com.equanime.equanime.models;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="grade_horaria")
public class Grade {
	
	@Id
	@GeneratedValue
	private Long id;
	
	@Column(name="id_disciplina")
	private Long idDisciplina;
	
	@Column(name="dia_semana")
	private String diaSemana;
	
	@Column(name="hora")
	private String hora;

	@Column(name="id_periodo")
	private Long idPeriodo;

	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDia() {
		return diaSemana;
	}
	
	public void setDia(String dia_semana) {
		this.diaSemana = dia_semana;
	} 
	
	public Long getDiciplina() {
		return idDisciplina;
	}
	public void setDisciplina(Long disciplina) {
		this.idDisciplina = disciplina;
	}
	

	public String getHora() {
		return hora;
	}

	public void setHora(String hora) {
		this.hora = hora;
	}

	public Long getId_periodo() {
		return idPeriodo;
	}

	public void setId_periodo(Long id_periodo) {
		this.idPeriodo = id_periodo;
	}
	
	
	
}
