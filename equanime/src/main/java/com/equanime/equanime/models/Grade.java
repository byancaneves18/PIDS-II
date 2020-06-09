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
	private Integer idDisciplina;
	
	@Column(name="dia_semana")
	private String diaSemana;
	
	@Column(name="hora")
	private String hora;

	@Column(name="id_periodo")
	private Integer idPeriodo;

	
	
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
	
	public Integer getDiciplina() {
		return idDisciplina;
	}
	public void setDisciplina(Integer disciplina) {
		this.idDisciplina = disciplina;
	}
	

	public String getHora() {
		return hora;
	}

	public void setHora(String hora) {
		this.hora = hora;
	}

	public Integer getId_periodo() {
		return idPeriodo;
	}

	public void setId_periodo(Integer id_periodo) {
		this.idPeriodo = id_periodo;
	}
	
	
	
}
