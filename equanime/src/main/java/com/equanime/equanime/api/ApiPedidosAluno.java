package com.equanime.equanime.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.equanime.equanime.controllers.ManterPedidosDeAlunos;
import com.equanime.equanime.models.ModeloPedidoAluno;

@RequestMapping("/aluno")
@RestController
public class ApiPedidosAluno {

	@Autowired
	ManterPedidosDeAlunos controlePedidos;
	
	@PostMapping (path = "novo")
	public void novoPedido(@RequestBody ModeloPedidoAluno modelo) {
		
		controlePedidos.novoPedido(modelo);
	}
	
	@PostMapping (path = "editar")
	public void editarPedido(@RequestBody ModeloPedidoAluno modelo) {
		
		controlePedidos.editarPedido(modelo);
	}
	
	@PostMapping (path = "deletar")
	public void deletarPedido(@RequestBody ModeloPedidoAluno modelo) {
		
		controlePedidos.deletarPedido(modelo);
	}
	
	@GetMapping (path = "getLista")
	public Iterable<ModeloPedidoAluno> listaPedidos() {
		
		
		return controlePedidos.listaPedidos();
	}
	
	@PostMapping (path = "getById")
	public ModeloPedidoAluno buscarPorId(@RequestBody Long id) {
		
		return controlePedidos.buscarPorId(id);
	}
	
}
