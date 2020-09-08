package com.equanime.equanime.repository;


import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.equanime.equanime.models.Usuario;

public interface RepositoryUsuario extends CrudRepository<Usuario, Long>  {

	
	
}

