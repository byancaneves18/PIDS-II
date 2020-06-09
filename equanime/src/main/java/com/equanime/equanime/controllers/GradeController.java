package com.equanime.equanime.controllers;

import javax.validation.ValidationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.equanime.equanime.models.Grade;
import com.equanime.equanime.repository.GradeRepository;

@Controller
public class GradeController {
	
	@Autowired
	GradeRepository gradeRepository;

	//é dado uma grade, se o id for maior que 0 e existir é feito uma alteração na tabela existente, caso contrário uma nova tabela é criada
	public void alterarSlot(Grade grade) {
		

				
		if(grade==null) {
			
			throw new ValidationException("A função alterarSlot precisa receber um objeto do tipo grade não nulo");
			
		}else if(grade.getId()>1&&ExisteGradePorId(grade.getId())) { //se verdadeiro a grade é alterada, caso contrario uma nova é criada
			
			gradeRepository.save(grade);
			
		}else {
		
			gradeRepository.save(grade);	//por enquanto os mesmo métodos estão sendo usados porque o spring não diferencia criar de alterar
			
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
