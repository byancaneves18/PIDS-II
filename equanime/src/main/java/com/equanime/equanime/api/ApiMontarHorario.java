package com.equanime.equanime.api;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.equanime.equanime.controllers.GradeController;
import com.equanime.equanime.models.DiaSemana;
import com.equanime.equanime.models.Grade;
import com.equanime.equanime.models.ModeloAlerta;
import com.equanime.equanime.models.ModeloObservacaoProfessor;
import com.equanime.equanime.models.ModeloPedidoAluno;
import com.itextpdf.text.DocumentException;

@RequestMapping("/grade")
@RestController
public class ApiMontarHorario {


	@Autowired
	GradeController manterGrade;
	
	@RequestMapping("/montarGrade")
	public String form() {
		return "grade/formGrade";
	}
	
	
	
	
	@GetMapping (path = "getHorarioPDF")
	public ResponseEntity<byte[]> getHorarioPDF() throws DocumentException, SQLException, IOException{ 
		
		
		System.out.println("getHorarioPDF");
		 return manterGrade.downloadPDF();
		
	}
	
	
	@PostMapping (path = "updatePedido")
	public void updatePedidosAluno(@RequestBody String body) throws ParseException{ //Atualiza um pedido de aluno especificado no body
		
		
		ModeloPedidoAluno pedido = new ModeloPedidoAluno();
		JSONParser parser = new JSONParser();
		JSONObject json = (JSONObject) parser.parse(body);
		pedido.setId(Long.parseLong(json.get("id").toString()));
		pedido.setAtendido(Boolean.parseBoolean(json.get("atendido").toString()));
		pedido.setPedido(json.get("pedido").toString());
		
		
		 manterGrade.updatePedidoAluno(pedido);
		
	}
	
	@GetMapping (path = "getPedidos")
	public Iterable<ModeloPedidoAluno> getPedidosAluno(){ //retorna uma lista com todos os pedidos de aluno
		
		return manterGrade.getPedidosAluno();
		
	}
	
	@PostMapping (path = "updateObservacao")
	public void updateObservacoesProfessor(@RequestBody String body) throws ParseException{ //Atualiza uma observação de professor especificada no body
		
		ModeloObservacaoProfessor observacao = new ModeloObservacaoProfessor();
		JSONParser parser = new JSONParser();
		JSONObject json = (JSONObject) parser.parse(body);
		observacao.setId(Long.parseLong(json.get("id").toString()));
		observacao.setAtendido(Boolean.parseBoolean(json.get("atendido").toString()));
		observacao.setId_professor(Long.parseLong(json.get("id_professor").toString()));
		observacao.setObservacao(json.get("observacao").toString());
		
		System.out.println("update Observacao");
		System.out.println("id: "+observacao.getId());
		System.out.println("atendido : "+observacao.isAtendido());
		System.out.println("observacao :"+observacao.getObservacao());
		
		 manterGrade.updateObservacoesProfessor(observacao);
		
	}
	
	@GetMapping (path = "getObservacoes")
	public Iterable<ModeloObservacaoProfessor> getObservacoesProfessor(){ //Retona uma lista com todas as observações de professor
		
		return manterGrade.getObservacoesProfessor();
		
	}
	
	@GetMapping (path = "getAlertas")
	public List<ModeloAlerta> getAlertas() throws SQLException {
		
		return manterGrade.checarHorario();
	}
	
	@GetMapping (path = "getDias")
	public Iterable<DiaSemana> getDiaSemana() { // retorna uma lista de dias da semana
		
		
		return manterGrade.getDiasSemana();
	}
	
	
	//chamado quando se deseja adicionar um slot do horario, reconhecido no banco de dados como grade_horario, espera um objeto do tipo grade no body
	@PostMapping(path = "setGrade")
	public void SetSlot(@RequestBody String body) throws ParseException {
		Grade grade = new Grade();
		JSONParser parser = new JSONParser();
		JSONObject json = (JSONObject) parser.parse(body);
		grade.setDia(json.get("dia").toString());
		grade.setHora(json.get("hora").toString());
		grade.setDisciplina(Long.parseLong(json.get("diciplina").toString()));
		grade.setId(Long.parseLong(json.get("id").toString()));
		grade.setId_periodo(Long.parseLong(json.get("id_periodo").toString()));
		System.out.println("criação de slot");
		System.out.println("dia: "+grade.getDia());
		System.out.println("as : "+grade.getHora());
		System.out.println("disciplina :"+grade.getDiciplina());
		
		manterGrade.criarSlot(grade);
		

	}
	
	//chamado quando se deseja editar um slot do horario, reconhecido no banco de dados como grade_horario, espera um objeto do tipo grade no body
	@PostMapping(path = "editGrade")
	public void EditSlot(@RequestBody String body) throws ParseException {
		Grade grade = new Grade();
		JSONParser parser = new JSONParser();
		JSONObject json = (JSONObject) parser.parse(body);
		grade.setDia(json.get("dia").toString());
		grade.setHora(json.get("hora").toString());
		grade.setDisciplina(Long.parseLong(json.get("diciplina").toString()));
		grade.setId(Long.parseLong(json.get("id").toString()));
		grade.setId_periodo(Long.parseLong(json.get("id_periodo").toString()));
		System.out.println("edição de slot");
		System.out.println("dia: "+grade.getDia());
		System.out.println("as : "+grade.getHora());
		System.out.println("disciplina :"+grade.getDiciplina());
		
		manterGrade.editarSlot(grade);
		

	}
	
	
	
	//chamado quando se deseja excluir um slot do horario, reconhecido no banco de dados como grade_horario, espera um objeto do tipo grade no body
	@PostMapping(path = "deleteGrade")
	public void DeleteSlot(@RequestBody String body) throws ParseException {
		Grade grade = new Grade();
		JSONParser parser = new JSONParser();
		JSONObject json = (JSONObject) parser.parse(body);
		grade.setDia(json.get("dia").toString());
		grade.setHora(json.get("hora").toString());
		grade.setDisciplina(Long.parseLong(json.get("diciplina").toString()));
		grade.setId(Long.parseLong(json.get("id").toString()));
		grade.setId_periodo(Long.parseLong(json.get("id_periodo").toString()));
		System.out.println("exclusão de slot");
		System.out.println("dia: "+grade.getDia());
		System.out.println("as : "+grade.getHora());
		System.out.println("disciplina :"+grade.getDiciplina());
		
		manterGrade.deletarSlot(grade);
		

	}
	
	//retorna todos os slots da grade
	@PostMapping(path = "gradeSlots")
	public Iterable<Grade> GradeSlots() {
		
		
		return manterGrade.GradeSlots();
	}
	
	//retorna todos os slots da grade dado um determinado periodo
	@PostMapping(path = "gradeSlotsByPeriodo")
	public Iterable<Grade> GradeSlotsByPeriodo(@RequestBody Long id_periodo) {
		
		
		return manterGrade.GradeSlotsByPeriodo(id_periodo);
	}
	
	
	
}
