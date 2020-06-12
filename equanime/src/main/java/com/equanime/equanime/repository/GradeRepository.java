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
	@Query(value="INSERT INTO grade_horaria (id, dia_semana, id_junfk, hora) values (:id, :dia_semana, :id_junfk, :hora)", nativeQuery = true)
	public void criarGrade(@Param("id") int id, @Param("dia_semana") String dia_semana, @Param("id_junfk") int id_junfk, @Param("hora") String hora);
	
	public Iterable<Grade> findGradeByIdPeriodo(Long id_periodo);
	

}
