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
	String  nome_semana;
	
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDia_semana() {
		return nome_semana;
	}

	public void setDia_semana(String dia_semana) {
		this.nome_semana = dia_semana;
	}
	

}
