package com.equanime.equanime.repository;

import org.springframework.data.repository.CrudRepository;

import com.equanime.equanime.models.DiaSemana;

public interface DiaSemanaRepository extends CrudRepository<DiaSemana, Long> {

	public Iterable<DiaSemana> findGradeByNomeSemana(String nomeSemana);
}
