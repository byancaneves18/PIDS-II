package com.equanime.equanime.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.equanime.equanime.models.ModeloPedidoAluno;
import com.equanime.equanime.repository.Pedido_aluno_Repository;


@Controller
public class ManterPedidosDeAlunos {

	@Autowired
	Pedido_aluno_Repository pedidosRepo;
	
	
	
	public void novoPedido(ModeloPedidoAluno modelo) {
		
		pedidosRepo.save(modelo);
	}
	
	public void editarPedido(ModeloPedidoAluno modelo) {
		
		pedidosRepo.save(modelo);
	}
	
	public void deletarPedido(ModeloPedidoAluno modelo) {
		
		pedidosRepo.delete(modelo);
	}
	
	public Iterable<ModeloPedidoAluno> listaPedidos() {
		
		
		return pedidosRepo.findAll();
	}
	
	
	public ModeloPedidoAluno buscarPorId(Long id) {
		
		return pedidosRepo.findById(id).get();
	}
	
}
