package com.equanime.equanime.models;

public class ModeloAlerta {

	private String tipo; //Pode ser um 'ALERTA' ou um 'AVISO' o front pode usar isso quando for exibir a mensagem
	
	private String mensagem; //Mensagem que aparecerá no front
	
	
	
	public ModeloAlerta(String tipo, String mensagem) {
		
		this.tipo = tipo;
		this.mensagem = mensagem;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getMensagem() {
		return mensagem;
	}

	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}
	
	
	
}
