package com.equanime.equanime.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="pedido_aluno")
public class ModeloPedidoAluno {

	@Id
	@GeneratedValue
	private Long id;
	@Column(name= "pedido")
	private String pedido;
	@Column(name= "atendido")
	private boolean atendido;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getPedido() {
		return pedido;
	}
	public void setPedido(String pedido) {
		this.pedido = pedido;
	}
	public boolean isAtendido() {
		return atendido;
	}
	public void setAtendido(boolean atendido) {
		this.atendido = atendido;
	}
	
	
}
