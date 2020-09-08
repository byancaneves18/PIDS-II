package com.equanime.equanime.controllers;


import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import com.equanime.equanime.models.Grade;
import com.equanime.equanime.models.ModeloDisciplina;
import com.equanime.equanime.models.ModeloDisponibilidadeProfessor;
import com.equanime.equanime.models.ModeloObservacaoProfessor;
import com.equanime.equanime.models.ModeloPedidoAluno;
import com.equanime.equanime.models.ModeloPreferenciaDisciplina;
import com.equanime.equanime.models.ModeloRelatorioPedidosAtendidos;
import com.equanime.equanime.repository.DiaSemanaRepository;
import com.equanime.equanime.repository.DisponibilidadeProfessorRepository;
import com.equanime.equanime.repository.GradeRepository;
import com.equanime.equanime.repository.ObservacaoProfessorRepository;
import com.equanime.equanime.repository.Pedido_aluno_Repository;
import com.equanime.equanime.repository.PreferenciaDisciplinaRepository;
import com.equanime.equanime.repository.TurnoRepository;
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
	@Autowired
	DisponibilidadeProfessorRepository disponibilidadeRepo;
	@Autowired
	PreferenciaDisciplinaRepository preferenciaDisciplinaRepo;
	@Autowired
	GradeRepository gradeRepository;
	@Autowired
	DiaSemanaRepository diaRepository;
	@Autowired
	ManterDisciplina manterDisciplina;
	@Autowired
	TurnoRepository turnoRepository;
	@Autowired
	UsuarioController manterUsuario;

	
	//caminho do relatorio que sera gerado
	String pathToFile = "Relatorio.pdf";
	
    
	
	
	
	//Retorna um pdf contendo o relatório de pedidos 
	public ResponseEntity<byte[]> ArquivoRelatorioDePedidosAtendidos() throws IOException, SQLException {
		
		CriarArquivoPDF(pathToFile);

        Path path = Paths.get(pathToFile);
	    byte[] content = Files.readAllBytes(path);
	    
		return ResponseEntity.ok()
                .contentLength(content.length)
                .header(HttpHeaders.CONTENT_TYPE, "application/pdf")
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + "Relatorio.pdf")
                .body(content);
	}
	
	//Gera um arquivo pdf contendo o relatório de pedidos no caminho desejado
	public void CriarArquivoPDF(String path) throws FileNotFoundException, SQLException{
		
		File file = new  File(path);
		FileOutputStream fos = new FileOutputStream(file);  
		PdfWriter pdfwriter = new PdfWriter(fos);
		PdfDocument pdfDocument = new PdfDocument(pdfwriter);
		Document document = new Document(pdfDocument);
		document.add(new Paragraph(RelatorioDePedidosAtendidos()));
		document.close();
		
		
		
	}
	
	//retorna uma String que corresponde a informação do relatório de pedidos 
	public String RelatorioDePedidosAtendidos() throws SQLException {
		
		String string = "";
		List<String> linhas = CriarRelatorioDePedidosAtendidos().getAllLinhas();
		
		for (String linha: linhas) {
		
			string = string+linha+("\n"); 
		}
		
		return string;
	}
	
	
	//cruza os dados necessarios, os despeja em um Modelo que é retornado
	public ModeloRelatorioPedidosAtendidos CriarRelatorioDePedidosAtendidos () throws SQLException {
		
		ModeloRelatorioPedidosAtendidos relatorio = new ModeloRelatorioPedidosAtendidos();
		List<Grade> grades ; //lista de grades pertencentes a algum dia da semana
		
		Iterable<ModeloPedidoAluno> pedidosDeAlunoLista;
		Iterable<ModeloObservacaoProfessor> observacaoProfessorLista;
		Iterable<ModeloDisponibilidadeProfessor> disponibilidadesLista; 
		Iterable<ModeloPreferenciaDisciplina> preferenciasDisciplina;
		
		pedidosDeAlunoLista = pedidosDeAlunoRepo.findAll();
		observacaoProfessorLista = observacaoProfessorRepo.findAll();
		disponibilidadesLista = disponibilidadeRepo.findAll();
		preferenciasDisciplina = preferenciaDisciplinaRepo.findAll();
		//==================================== ATENDIDOS===========================	
		relatorio.novaLinha(" ");
		relatorio.novaLinha(" ");
		relatorio.novaLinha("PEDIDOS ATENDIDOS PELO HORÁRIO");
		relatorio.novaLinha(" ");
		relatorio.novaLinha(" ");
		
		//==================================== pedidos de Aluno===========================	
		for(ModeloPedidoAluno pedido: pedidosDeAlunoLista) {
			
			if(pedido.isAtendido()) {
				
				relatorio.novaLinha("COLEGIADO: "+pedido.getPedido());
				
			}		
		}
		//==================================== pedidos de Professor===========================	
		for(ModeloObservacaoProfessor pedido: observacaoProfessorLista) {
			
			if(pedido.isAtendido()) {
				
				
				
				relatorio.novaLinha(usuariosConrole.buscarUsuarioPorId(pedido.getId_professor()).get().getNome()+ ": "+pedido.getObservacao());
				
			}	
			
		}
		
		//====================================Disponibilidade==========================	
		
		for (ModeloDisponibilidadeProfessor disponibilidade : disponibilidadesLista) {
			
			
			grades = (List<Grade>) gradeRepository.findGradeByDiaSemana(diaRepository.findById(disponibilidade.getIdSemana()).get().getDia_semana()); // Se tal disponibilidade se refere a sexta aqui são pegos os elementos grade da sexta feira
			List<Grade> gradesProfessor = new ArrayList<>();//Grades do professor dono da disponibilidade no dia da semana da disponibilidade
			
			for (Grade grade: grades) {
				
				
				if(manterDisciplina.buscarPorId(grade.getDiciplina()).get().getId_professor()==disponibilidade.getIdUsuario() ) {
					
				
					gradesProfessor.add(grade);
				}
			}
			
			
			for (Grade grade: gradesProfessor) {
				
				
				
				if(grade.getHora().equals("19:00")||grade.getHora().equals("20:40")||grade.getHora().equals("22:30")) {
					
					if(turnoRepository.findById(disponibilidade.getIdTurno()).get().getNome().equals("VESPERTINO")||turnoRepository.findById(disponibilidade.getIdTurno()).get().getNome().equals("VESPERTINO-NOTURNO")) {
						
						relatorio.novaLinha(manterUsuario.buscarUsuarioPorId(disponibilidade.getIdUsuario()).get().getNome()+
																": Prefere não ministrar aulas "+diaRepository.findById(disponibilidade.getIdSemana()).get().getDia_semana()+
																" no turno "+turnoRepository.findById(disponibilidade.getIdTurno()).get().getNome()); //Geração da mensagem);
						
					}		
				}else {
					
					if(turnoRepository.findById(disponibilidade.getIdTurno()).get().getNome().equals("NOTURNO")||turnoRepository.findById(disponibilidade.getIdTurno()).get().getNome().equals("VESPERTINO-NOTURNO")) {
						
						relatorio.novaLinha(manterUsuario.buscarUsuarioPorId(disponibilidade.getIdUsuario()).get().getNome()+
																": Prefere não ministrar aulas "+diaRepository.findById(disponibilidade.getIdSemana()).get().getDia_semana()+
																" no turno "+turnoRepository.findById(disponibilidade.getIdTurno()).get().getNome()); //Geração da mensagem);
						
					}
				}
			}
			
			
		}
		
		//====================================preferencia disciplinas===========================
		
		ModeloDisciplina disciplina;
		
		for(ModeloPreferenciaDisciplina preferenciaDisciplina : preferenciasDisciplina) {
			
			disciplina = manterDisciplina.buscarPorId(preferenciaDisciplina.getIdDisciplina()).get();
			if(disciplina.getId_professor()==preferenciaDisciplina.getIdUsuario()) {
				
				relatorio.novaLinha(manterUsuario.buscarUsuarioPorId(preferenciaDisciplina.getIdUsuario()).get().getNome()+": deseja ministrar " +disciplina.getNome());
			}
		}
		
		//====================================NÃO ATENDIDOS===========================	
		relatorio.novaLinha(" ");
		relatorio.novaLinha(" ");
		relatorio.novaLinha("PEDIDOS NÃO ATENDIDOS PELO HORÁRIO");
		relatorio.novaLinha(" ");
		relatorio.novaLinha(" ");
		
	//==================================== pedidos de Aluno===========================	
		for(ModeloPedidoAluno pedido: pedidosDeAlunoLista) {
			
			if(!pedido.isAtendido()) {
				
				relatorio.novaLinha("COLEGIADO: "+pedido.getPedido());
				
			}		
		}
	//==================================== pedidos de Professor===========================	
		for(ModeloObservacaoProfessor pedido: observacaoProfessorLista) {
			
			if(!pedido.isAtendido()) {
				
				
				
				relatorio.novaLinha(usuariosConrole.buscarUsuarioPorId(pedido.getId_professor()).get().getNome()+ ": "+pedido.getObservacao());
				
			}	
			
		}
		
		//====================================Disponibilidade==========================	
		
		for (ModeloDisponibilidadeProfessor disponibilidade : disponibilidadesLista) {
			
			
			grades = (List<Grade>) gradeRepository.findGradeByDiaSemana(diaRepository.findById(disponibilidade.getIdSemana()).get().getDia_semana()); // Se tal disponibilidade se refere a sexta aqui são pegos os elementos grade da sexta feira
			List<Grade> gradesProfessor = new ArrayList<>();//Grades do professor dono da disponibilidade no dia da semana da disponibilidade
			
			for (Grade grade: grades) {
				
				
				if(manterDisciplina.buscarPorId(grade.getDiciplina()).get().getId_professor()==disponibilidade.getIdUsuario() ) {
					
				
					gradesProfessor.add(grade);
				}
			}
			
			
			for (Grade grade: gradesProfessor) {
				
				
				
				if(grade.getHora().equals("19:00")||grade.getHora().equals("20:40")||grade.getHora().equals("22:30")) {
					
					if(turnoRepository.findById(disponibilidade.getIdTurno()).get().getNome().equals("NOTURNO")||turnoRepository.findById(disponibilidade.getIdTurno()).get().getNome().equals("VESPERTINO-NOTURNO")) {
						
						relatorio.novaLinha(manterUsuario.buscarUsuarioPorId(disponibilidade.getIdUsuario()).get().getNome()+
																": Prefere não ministrar aulas "+diaRepository.findById(disponibilidade.getIdSemana()).get().getDia_semana()+
																" no turno "+turnoRepository.findById(disponibilidade.getIdTurno()).get().getNome()); //Geração da mensagem);
						
					}		
				}else {
					
					if(turnoRepository.findById(disponibilidade.getIdTurno()).get().getNome().equals("VESPERTINO")||turnoRepository.findById(disponibilidade.getIdTurno()).get().getNome().equals("VESPERTINO-NOTURNO")) {
						
						relatorio.novaLinha(manterUsuario.buscarUsuarioPorId(disponibilidade.getIdUsuario()).get().getNome()+
																": Prefere não ministrar aulas "+diaRepository.findById(disponibilidade.getIdSemana()).get().getDia_semana()+
																" no turno "+turnoRepository.findById(disponibilidade.getIdTurno()).get().getNome()); //Geração da mensagem);
						
					}
				}
			}
			
			
		}
		
		//====================================preferencia disciplinas===========================
		
		
		for(ModeloPreferenciaDisciplina preferenciaDisciplina : preferenciasDisciplina) {
			
			disciplina = manterDisciplina.buscarPorId(preferenciaDisciplina.getIdDisciplina()).get();
			if(disciplina.getId_professor()!=preferenciaDisciplina.getIdUsuario()) {
				
				relatorio.novaLinha(manterUsuario.buscarUsuarioPorId(preferenciaDisciplina.getIdUsuario()).get().getNome()+": deseja ministrar " +disciplina.getNome());
			}
		}
		
		
		return relatorio;	
	}
	
}
