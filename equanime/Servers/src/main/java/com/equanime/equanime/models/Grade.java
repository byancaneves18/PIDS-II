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
	private Integer id;
	
	@Column(name="dia_semana")
	private String dia_semana;
	
	@Column(name="hora")
	private String hora;

	@Column(name="id_disciplina")
	private Integer disciplina;
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDia() {
		return dia_semana;
	}
	
	public void setDia(String dia_semana) {
		this.dia_semana = dia_semana;
	} 
	
	public Integer getDisciplina() {
		return disciplina;
	}
	public void setDisciplina(Integer disciplina) {
		this.disciplina = disciplina;
	}
	

	public String getHora() {
		return hora;
	}

	public void setHora(String hora) {
		this.hora = hora;
	}
	
	
	
}
