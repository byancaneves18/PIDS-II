package com.equanime.equanime.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.equanime.equanime.models.ModeloPedidoAluno;
import com.equanime.equanime.repository.Pedido_aluno_Repository;


@Controller
public class ManterPedidosDeAlunos {

	@Autowired
	Pedido_aluno_Repository pedidosRepo;
	
	
	
	public void novoPedido(ModeloPedidoAluno modelo) throws Exception {
		
		if(isStringNullOrWhiteSpace(modelo.getPedido())) {
			
			throw new Exception("O pedido não pode estar em branco"); 
		}else {
		
			pedidosRepo.save(modelo);
		}
	}
	
	public void editarPedido(ModeloPedidoAluno modelo) {
		if(isStringNullOrWhiteSpace(modelo.getPedido())) {
			
			
		}else {
			pedidosRepo.save(modelo);
		}
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
	
	
	public static boolean isStringNullOrWhiteSpace(String value) {
	    if (value == null) {
	        return true;
	    }

	    for (int i = 0; i < value.length(); i++) {
	        if (!Character.isWhitespace(value.charAt(i))) {
	            return false;
	        }
	    }

	    return true;
	}
	
}
