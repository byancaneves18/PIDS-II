package com.equanime.equanime.controllers;

import java.text.ParseException;
import java.util.ArrayList;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.equanime.equanime.models.Grade;
import com.equanime.equanime.repository.GradeRepository;

@RestController
public class GardeController {
	
	@Autowired
	GradeRepository repository;
	
	
	@RequestMapping("/montarGrade")
	public String form() {
		return "grade/formGrade";
	}
	
	@RequestMapping(value="/grade/teste", method = RequestMethod.GET)
	@ResponseBody
	public String process() {
		return "Teste";
	}
	
	@RequestMapping(value="/grade/listar", method = RequestMethod.GET)
	@ResponseBody
	public  ArrayList listar() {
		ArrayList lista;
		lista = (ArrayList) repository.findAll(); 
		
		return lista;
	}
	
	@RequestMapping(value="/grade/salvar", method = RequestMethod.POST)
	@ResponseBody
	public String save(@RequestBody Grade grade) {
		try {
			repository.save(grade);
			
		}catch (Exception e) {
			return e.getMessage();
		}
		return "Funcionou";
	}
	
	@RequestMapping(value="/grade/montar", method = RequestMethod.POST)
	@ResponseBody
	public String montarGradeHoraria(@RequestBody String value) throws org.json.simple.parser.ParseException{
		
		JSONParser parser = new JSONParser();
		JSONObject json = (JSONObject) parser.parse(value);
		JSONObject jJunto = (JSONObject) json.get("vincular");
		
		System.out.println(value);
		
		Integer id_disciplina, disciplina;
		String  dia, hora;
		 
		Grade grade = new Grade();
		
		grade.setId(Integer.parseInt(json.get("id").toString()));
		id_disciplina = grade.getId();
		
		grade.setDia(json.get("dia_semana").toString());
		dia = json.get("dia_semana").toString();
		
		grade.setHora(json.get("hora").toString());
		hora = json.get("hora").toString();
		
		grade.setDisciplina(Integer.parseInt(json.get("id_disciplina").toString()));
		disciplina = grade.getDisciplina();
		
		System.out.println("resultado: " +id_disciplina + hora + dia + disciplina);
		try {
			repository.criarGrade(id_disciplina, dia, disciplina, hora);
			return "Certo";
		}catch (Exception e) {
			return e.getMessage();						
		}
	}
	
	
}
