package com.equanime.equanime.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.equanime.equanime.models.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {
	
	List<Usuario> findByNome(String nome);
	
	//List<Usuario> findByCpf(String cpf);
/*
	@Transactional
	@Modifying(clearAutomatically = true)
	@Query(value="SELECT ucpf FROM usuario ucpf WHERE ucpf.cpf = :cpf")
	*/
	
	Optional<Usuario> findByCpf(String cpf);
	
	/*
	public default Usuario findByCpf(String cpf) {
		List<Usuario> lista = new ArrayList<Usuario>();
		
		Usuario user = new Usuario();
		
		for (Usuario obj : lista) {
			if(user.getCpf()==cpf) {
				return user;
			}
			
		}		
		return user;
		
	}
	*/
	
}
