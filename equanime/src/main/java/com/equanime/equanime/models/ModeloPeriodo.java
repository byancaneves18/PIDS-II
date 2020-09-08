package com.equanime.equanime.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="periodo")
public class ModeloPeriodo {

	@Id
	@GeneratedValue
	private Long id_periodo;
	@Column(name = "periodo_semestre")
	private String periodo_semestre;
	
	
	public ModeloPeriodo() {}
	
	public ModeloPeriodo(Long id_periodo,String periodo_semestre){
		this.id_periodo = id_periodo;
		this.periodo_semestre = periodo_semestre;
	}
	
	public Long getId_periodo() {
		return id_periodo;
	}
	public void setId_periodo(Long id_periodo) {
		this.id_periodo = id_periodo;
	}
	public String getPeriodo_semestre() {
		return periodo_semestre;
	}
	public void setPeriodo_semestre(String periodo_semestre) {
		this.periodo_semestre = periodo_semestre;
	}
	
	
	
}
