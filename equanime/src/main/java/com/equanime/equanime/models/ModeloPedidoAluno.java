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
	private int id;
	@Column(name= "pedido")
	private String pedido;
	@Column(name= "atendido")
	private boolean atendido;
	
	
}
