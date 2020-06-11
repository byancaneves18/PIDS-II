package com.equanime.equanime.controllers;

import javax.validation.ValidationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.equanime.equanime.models.DiaSemana;
import com.equanime.equanime.models.Grade;
import com.equanime.equanime.repository.DiaSemanaRepository;
import com.equanime.equanime.repository.GradeRepository;

@Controller
public class GradeController {
	
	@Autowired
	GradeRepository gradeRepository;
	@Autowired
	DiaSemanaRepository diaRepository;
	
	
	
	public Iterable<DiaSemana> getDiasSemana() { // retorna uma lista com todos os dias da semana
		
		return diaRepository.findAll();
	}
	
	
	public void deletarSlot(Grade grade) {
		
		if(grade==null) {
			
			throw new ValidationException("A função deletarSlot precisa receber um objeto do tipo grade não nulo");
			
		}else {
		
			gradeRepository.delete(grade);
		}
	}
	
	

	public void editarSlot(Grade grade) {
		

				
		if(grade==null) {
			
			throw new ValidationException("A função editarSlot precisa receber um objeto do tipo grade não nulo");
			
		}else {
		
			gradeRepository.save(grade);
			
		}
		
		
	}


	public void criarSlot(Grade grade) {
		

				
		if(grade==null) {
			
			throw new ValidationException("A função criarSlot precisa receber um objeto do tipo grade não nulo");
			
		}else {
		
			gradeRepository.save(grade);	
			
		}
		
		
	}
	
	//retorna todos os slots da grade
	public Iterable<Grade> GradeSlots() {
		
		return gradeRepository.findAll();
	}
	
	//retorna todos os slots da grade que pertencem a um dado periodo
	public Iterable<Grade> GradeSlotsByPeriodo(Integer id_periodo) {
		
		return gradeRepository.findGradeByIdPeriodo(id_periodo);
	}
	
	
	//retorna um elemento grade baseado no id
	public Grade GradePorId(Long id) {
		
		return gradeRepository.findById(id).get();
	}
	
	//retorna true caso encontre algum elemento Grade com o dado id
	public boolean ExisteGradePorId(Long id) {
		
		return gradeRepository.existsById(id);
	}
	
	
}
