package com.equanime.equanime.controllers;

import java.io.Console;
import java.util.Optional;

import javax.validation.constraints.Null;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.equanime.equanime.models.Usuario;
import com.equanime.equanime.repository.UsuarioRepository;

@RestController
public class UsuarioController {
	
	@Autowired
	UsuarioRepository repository;
	
	@RequestMapping("/cadastrarUsuario")
	
	public String form() {
		return "usuario/formUsuario";
	}
	
	@RequestMapping(value="/usuario" ,method = RequestMethod.GET)
	@ResponseBody
	public String process() {
		return "";
	}
	
	@RequestMapping(value="/usuario/salvar" ,method = RequestMethod.POST)
	@ResponseBody
	public String save(@RequestBody Usuario user) {
		try {
			repository.save(user);	
		}catch (Exception e) {
			return e.getMessage();			
		}
		return "";
	}
	
	@RequestMapping(value="/usuario/listar" ,method = RequestMethod.GET)
	@ResponseBody
	public Iterable<Usuario> listarTodos() {
		return repository.findAll();
	} 
	
	@RequestMapping(value="/usuario/deletar" ,method = RequestMethod.POST)
	@ResponseBody
	public String delete(@RequestBody Usuario user) {
		try {
			repository.delete(user);
		}catch (Exception e) {
			return e.getMessage();
		}
		return "Deletou";
	}
	
	@RequestMapping(value="/usuario/buscar" ,method = RequestMethod.POST)
	@ResponseBody
	public Iterable<Usuario> buscarUsuario(@RequestBody String nome) {
		return repository.findByNome(nome);
	} 
	
	public Optional<Usuario> buscarUsuarioPorId(Long id) {
		
		return repository.findById(id);
	}
	
}
