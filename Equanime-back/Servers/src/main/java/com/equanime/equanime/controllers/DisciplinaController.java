package com.equanime.equanime.controllers;


import java.lang.reflect.Field;
import java.util.ArrayList;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.equanime.equanime.models.Disciplina;
import com.equanime.equanime.models.Usuario;
import com.equanime.equanime.repository.DisciplinaRepository;
import com.equanime.equanime.repository.UsuarioRepository;

@RestController
public class DisciplinaController {
	
	@Autowired
	DisciplinaRepository repository;
	UsuarioRepository userRepository;
	//Usuario userLocal = new Usuario();
	
	@RequestMapping("/cadastrarDisciplina")
	
	public String form() {
		return "usuario/formUsuario";
	}
	
	@RequestMapping(value="/disciplina/teste" ,method = RequestMethod.GET)
	@ResponseBody
	public String process() {
		return "Teste";
	}
	
	@RequestMapping(value="/disciplina/salvar" ,method = RequestMethod.POST)
	@ResponseBody
	public String save(@RequestBody Disciplina disciplina) {
		try {
			repository.save(disciplina);			
		}catch (Exception e) {
			return e.getMessage();			
		}
		return "Funcionou";
	}
	
	@RequestMapping(value="/disciplina/juntar" ,method = RequestMethod.POST)
	@ResponseBody
	public String montarDisciplinaProfessor(@RequestBody JSONObject value) {
		Usuario valor;
		Field[] array;
		array = value.get("user").getClass().getDeclaredFields();
		
		System.out.println(array[1]);
		//Usuario usuario = new Usuario(valor[0]);
		
		System.out.println(array);
		
		
		try {
			//userLocal = userRepository.findById(user.getId()).get();
			//if(userLocal.getCidade().toUpperCase()=="ANAPOLIS") {
				return "";
			//}else {
			//	return "";
			//}
			//has.put("nome", user.getNome());
			
		}catch (Exception e) {
			return e.getMessage();						
		}
		//return "deu certo" ;
	}
}