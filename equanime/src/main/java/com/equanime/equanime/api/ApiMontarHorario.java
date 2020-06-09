package com.equanime.equanime.api;

import java.util.ArrayList;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.equanime.equanime.controllers.GradeController;
import com.equanime.equanime.models.Grade;
import com.equanime.equanime.repository.GradeRepository;

@RequestMapping("/grade")
@RestController
public class ApiMontarHorario {

	@Autowired
	GradeRepository repository;
	@Autowired
	GradeController manterGrade;
	
	@RequestMapping("/montarGrade")
	public String form() {
		return "grade/formGrade";
	}
	
	
	//chamado quando se deseja alterar um slot do horario, reconhecido no banco de dados como grade_horario, espera um objeto do tipo grade no body
	@PostMapping(path = "setGrade")
	public void SetSlot(@RequestBody String body) throws ParseException {
		Grade grade = new Grade();
		JSONParser parser = new JSONParser();
		JSONObject json = (JSONObject) parser.parse(body);
		grade.setDia(json.get("dia").toString());
		grade.setHora(json.get("hora").toString());
		grade.setDisciplina(Integer.parseInt(json.get("diciplina").toString()));
		grade.setId(Long.parseLong(json.get("id").toString()));
		grade.setId_periodo(Integer.parseInt(json.get("id_periodo").toString()));
		System.out.println("alteração de slot");
		System.out.println("dia: "+grade.getDia());
		System.out.println("as : "+grade.getHora());
		System.out.println("disciplina :"+grade.getDiciplina());
		
		manterGrade.alterarSlot(grade);
		

	}
	
	//retorna todos os slots da grade
	@PostMapping(path = "gradeSlots")
	public Iterable<Grade> GradeSlots() {
		
		
		return manterGrade.GradeSlots();
	}
	
	//retorna todos os slots da grade dado um determinado periodo
	@PostMapping(path = "gradeSlotsByPeriodo")
	public Iterable<Grade> GradeSlotsByPeriodo(@RequestBody Integer id_periodo) {
		
		
		return manterGrade.GradeSlotsByPeriodo(id_periodo);
	}
	
	
	@RequestMapping(value="/teste", method = RequestMethod.GET)
	@ResponseBody
	public String process() {
		return "Teste";
	}
	
	@RequestMapping(value="/listar", method = RequestMethod.GET)
	@ResponseBody
	public  ArrayList listar() {
		ArrayList lista;
		lista = (ArrayList) repository.findAll(); 
		
		return lista;
	}
	
	@RequestMapping(value="/salvar", method = RequestMethod.POST)
	@ResponseBody
	public String save(@RequestBody Grade grade) {
		try {
			repository.save(grade);
			
		}catch (Exception e) {
			return e.getMessage();
		}
		return "Funcionou";
	}
	
	/*@RequestMapping(value="/montar", method = RequestMethod.POST)
	@ResponseBody
	public String montarGradeHoraria(@RequestBody String value) throws org.json.simple.parser.ParseException{
		
		JSONParser parser = new JSONParser();
		JSONObject json = (JSONObject) parser.parse(value);
		JSONObject jJunto = (JSONObject) json.get("vincular");
		
		System.out.println(value);
		
		Integer id_juncao, disciplina;
		String  dia, hora;
		 
		Grade grade = new Grade();
		
		grade.setId(Integer.parseInt(json.get("id").toString()));
		id_juncao = grade.getId();
		
		grade.setDia(json.get("dia_semana").toString());
		dia = json.get("dia_semana").toString();
		
		grade.setHora(json.get("hora").toString());
		hora = json.get("hora").toString();
		
		grade.setDisciplina(Integer.parseInt(json.get("id_junfk").toString()));
		disciplina = grade.getDiciplina();
		
		System.out.println(id_juncao + hora + dia + disciplina);
		try {
			repository.criarGrade(id_juncao, dia, disciplina, hora);
			return "Certo";
		}catch (Exception e) {
			return e.getMessage();						
		}
	}*/
	
	
}
