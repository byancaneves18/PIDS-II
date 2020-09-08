package com.equanime.equanime.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="dia_semana")
public class DiaSemana {
	
	@Id
	@GeneratedValue
	Long id;
	
	@Column(name="nome_semana")
	String  nomeSemana;
	
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDia_semana() {
		return nomeSemana;
	}

	public void setDia_semana(String dia_semana) {
		this.nomeSemana = dia_semana;
	}
	

}
