package com.equanime.equanime.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.equanime.equanime.models.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {
	
	List<Usuario> findByNome(String nome);
	

}
