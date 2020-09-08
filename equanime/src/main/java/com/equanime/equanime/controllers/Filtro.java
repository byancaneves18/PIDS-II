package com.equanime.equanime.controllers;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.mapping.Array;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.equanime.equanime.models.ModeloDisciplina;
import com.equanime.equanime.models.Usuario;
import com.equanime.equanime.repository.UsuarioRepository;

@RestController
public class Filtro {
	
	private Usuario usuario;
	private List<ModeloDisciplina> disciplina;
	
	public Usuario getUsuario() {
		return usuario;
	}
	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	public List<ModeloDisciplina> getDisciplina() {
		return disciplina;
	}
	public void setDisciplina(List<ModeloDisciplina> disciplina) {
		this.disciplina = disciplina;
	}	
	
}
