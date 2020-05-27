package com.equanime.equanime.controllers;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.stereotype.Controller;

import com.equanime.equanime.models.ModeloObservacaoProfessor;
import com.equanime.equanime.models.ModeloPedidoAluno;
import com.equanime.equanime.models.ModeloRelatorioPedidosAtendidos;
import com.equanime.equanime.repository.ObservacaoProfessorRepository;
import com.equanime.equanime.repository.Pedido_aluno_Repository;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Paragraph;

@Controller
public class GerarRelatorios {

	@Autowired
	Pedido_aluno_Repository pedidosDeAlunoRepo;
	@Autowired
	ObservacaoProfessorRepository observacaoProfessorRepo;
	@Autowired
	UsuarioController usuariosConrole;
	
	//caminho do relatorio que sera gerado
	String pathToFile = "Relatorio.pdf";
	
    
	
	
	
	//Gera e retorna um pdf contendo o relatório de pedidos 
	public ByteArrayResource ArquivoRelatorioDePedidosAtendidos() throws IOException {
		
		File file = CriarArquivoPDF(pathToFile);
		
	    Path path = Paths.get(file.getAbsolutePath());
	    ByteArrayResource resource = new ByteArrayResource(Files.readAllBytes(path));
		
		return resource;
	}
	
	//Gera um arquivo pdf contendo o relatório de pedidos no caminho desejado
	public File CriarArquivoPDF(String path) throws FileNotFoundException{
		
		File file = new  File(path);
		FileOutputStream fos = new FileOutputStream(file);  
		PdfWriter pdfwriter = new PdfWriter(fos);
		PdfDocument pdfDocument = new PdfDocument(pdfwriter);
		Document document = new Document(pdfDocument);
		document.add(new Paragraph(RelatorioDePedidosAtendidos()));
		document.close();
		
		return file;
		
		
	}
	
	//retorna uma String que corresponde a informação do relatório de pedidos 
	public String RelatorioDePedidosAtendidos() {
		
		String string = "";
		List<String> linhas = CriarRelatorioDePedidosAtendidos().getAllLinhas();
		
		for (String linha: linhas) {
		
			string = string+linha+("\n"); 
		}
		
		return string;
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
