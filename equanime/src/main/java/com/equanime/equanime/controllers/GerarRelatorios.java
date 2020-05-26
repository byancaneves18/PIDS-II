package com.equanime.equanime.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.equanime.equanime.models.ModeloObservacaoProfessor;
import com.equanime.equanime.models.ModeloPedidoAluno;
import com.equanime.equanime.models.ModeloRelatorioPedidosAtendidos;
import com.equanime.equanime.repository.ObservacaoProfessorRepository;
import com.equanime.equanime.repository.Pedido_aluno_Repository;
import com.fasterxml.jackson.databind.node.BinaryNode;

@Controller
public class GerarRelatorios {

	@Autowired
	Pedido_aluno_Repository pedidosDeAlunoRepo;
	@Autowired
	ObservacaoProfessorRepository observacaoProfessorRepo;
	@Autowired
	UsuarioController usuariosConrole;
	
	
	//retorna um pdf contendo o relatório de pedidos 
	public BinaryNode ArquivoRelatorioDePedidosAtendidos() {
		
		return null;
	}
	
	//retorna uma String que corresponde a informação do relatório de pedidos 
	public String RelatorioDePedidosAtendidos() {
		return "";
	}
	
	
	//cruza os dados necessarios, os despeja em um Modelo que é retornado
	public ModeloRelatorioPedidosAtendidos CriarRelatorioDePedidosAtendidos () {
		
		ModeloRelatorioPedidosAtendidos relatorio = new ModeloRelatorioPedidosAtendidos();
		
		Iterable<ModeloPedidoAluno> pedidosDeAlunoLista;
		Iterable<ModeloObservacaoProfessor> observacaoProfessorLista;
		
		pedidosDeAlunoLista = pedidosDeAlunoRepo.findAll();
		observacaoProfessorLista = observacaoProfessorRepo.findAll();
		
		relatorio.novaLinha(" ");
		relatorio.novaLinha(" ");
		relatorio.novaLinha("PEDIDOS ATENDIDOS PELO HORÁRIO");
		relatorio.novaLinha(" ");
		relatorio.novaLinha(" ");
		
		for(ModeloPedidoAluno pedido: pedidosDeAlunoLista) {
			
			if(pedido.isAtendido()) {
				
				relatorio.novaLinha("COLEGIADO : "+pedido.getPedido());
				
			}		
		}
		
		for(ModeloObservacaoProfessor pedido: observacaoProfessorLista) {
			
			if(pedido.isAtendido()) {
				
				
				
				relatorio.novaLinha(usuariosConrole.buscarUsuarioPorId(pedido.getId_professor()).get().getNome()+ " : "+pedido.getObservacao());
				
			}	
			
		}
		
		relatorio.novaLinha(" ");
		relatorio.novaLinha(" ");
		relatorio.novaLinha("PEDIDOS NÃO ATENDIDOS PELO HORÁRIO");
		relatorio.novaLinha(" ");
		relatorio.novaLinha(" ");
		
		
		for(ModeloPedidoAluno pedido: pedidosDeAlunoLista) {
			
			if(!pedido.isAtendido()) {
				
				relatorio.novaLinha("COLEGIADO : "+pedido.getPedido());
				
			}		
		}
		
		for(ModeloObservacaoProfessor pedido: observacaoProfessorLista) {
			
			if(!pedido.isAtendido()) {
				
				
				
				relatorio.novaLinha(usuariosConrole.buscarUsuarioPorId(pedido.getId_professor()).get().getNome()+ " : "+pedido.getObservacao());
				
			}	
			
		}
		
		
		return relatorio;	
	}
	
}
