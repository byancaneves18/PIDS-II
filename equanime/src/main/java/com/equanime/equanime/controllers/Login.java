package com.equanime.equanime.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.equanime.equanime.models.Usuario;
import com.equanime.equanime.repository.RepositoryUsuario;
import com.equanime.equanime.repository.UsuarioRepository;

import javassist.tools.rmi.ObjectNotFoundException;

@RestController
public class Login {
	@Autowired
	UsuarioRepository userRep;
	
	@RequestMapping(value="/login", method = RequestMethod.POST)
	@ResponseBody
	public boolean efetuarLogin(@RequestBody String value) throws org.json.simple.parser.ParseException, ObjectNotFoundException{
		Usuario user = new Usuario();
		
		Iterable<Usuario> lista = userRep.findAll();
		
		JSONParser parser = new JSONParser();
		JSONObject json = (JSONObject) parser.parse(value);
		
		System.out.println(value);
		
		String  cpf, senha;
		
		cpf = json.get("cpf").toString();
		senha = json.get("senha").toString();
		
		try {
			
			for(Usuario obj: lista) {
				if(obj.getCpf().equals(cpf)) {
					if(obj.getSenha().equals(senha)) {
						return true;
					}
				}
			}
			
			
			return false;
		}catch (Exception e) {
			return e.getMessage() != null;						
		}
	}
}
