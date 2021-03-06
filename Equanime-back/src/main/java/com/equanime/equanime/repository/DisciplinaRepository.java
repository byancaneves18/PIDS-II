package com.equanime.equanime.repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.equanime.equanime.models.ModeloDisciplina;

public interface DisciplinaRepository extends CrudRepository<ModeloDisciplina, Long>{
	
	
	@Query(value="INSERT INTO disciplina_professor (id_usuariofk, id_disciplinafk) value (?1,?2)", nativeQuery = true)
	public String criarProfessorDisciplina(long disciplinaID, long professorID);
	
	public Iterable<ModeloDisciplina> findByIdPeriodo(Long id_periodo);

}
