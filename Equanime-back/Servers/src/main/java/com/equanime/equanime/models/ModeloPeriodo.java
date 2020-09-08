package com.equanime.equanime.models;

public class ModeloPeriodo {

	private int id_periodo;
	private String periodo_semestre;
	
	
	public ModeloPeriodo(int id_periodo,String periodo_semestre){
		this.id_periodo = id_periodo;
		this.periodo_semestre = periodo_semestre;
	}
	
	public int getId_periodo() {
		return id_periodo;
	}
	public void setId_periodo(int id_periodo) {
		this.id_periodo = id_periodo;
	}
	public String getPeriodo_semestre() {
		return periodo_semestre;
	}
	public void setPeriodo_semestre(String periodo_semestre) {
		this.periodo_semestre = periodo_semestre;
	}
	
	
	
}
