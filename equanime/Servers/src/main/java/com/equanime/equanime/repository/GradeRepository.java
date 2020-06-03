package com.equanime.equanime.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.equanime.equanime.models.Grade;

public interface GradeRepository extends CrudRepository<Grade, Long>{

	@Transactional
	@Modifying(clearAutomatically = true)
	//@Query(value="INSERT INTO grade_horaria (id, dia_semana, id_disciplina, hora) values (:id, :dia_semana, :id_disciplina, :hora)", nativeQuery = true)
	//public void criarGrade(@Param("id") int id, @Param("dia_semana") String dia_semana, @Param("id_disciplina") int id_disciplina, @Param("hora") String hora);

	@Query(value="INSERT INTO grade_horaria (dia_semana, id_disciplina, hora) values (:dia_semana, :id_disciplina, :hora)", nativeQuery = true)

	public void criarGrade(@Param("dia_semana") String dia_semana, @Param("id_disciplina") int id_disciplina, @Param("hora") String hora);

}
