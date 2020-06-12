package com.equanime.equanime.controllers;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.validation.ValidationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.equanime.equanime.models.DiaSemana;
import com.equanime.equanime.models.Grade;
import com.equanime.equanime.models.ModeloAlerta;
import com.equanime.equanime.models.ModeloDisciplina;
import com.equanime.equanime.repository.DiaSemanaRepository;
import com.equanime.equanime.repository.GradeRepository;


@Controller
public class GradeController {
	
	@Autowired
	GradeRepository gradeRepository;
	@Autowired
	DiaSemanaRepository diaRepository;
	@Autowired
	ManterDisciplina manterDisciplina;
	@Autowired
	UsuarioController manterUsuario;
	
	
	
	
	
	public List<ModeloAlerta> checarChoque() throws SQLException { //Verifica se algum professor está dando aula no mesmo horário em dois períodos ao mesmo tempo se sim cria um alerta e o retorna, caso contrario retorna null
		
		List<Grade> grades =  (List<Grade>) gradeRepository.findAll();
		List<ModeloAlerta> alertas = null; //lista de possiveis alertas
		
		
		
		
		for(int i=0;i<grades.size();i++) {
			
			for(int i2=i+1;i2<grades.size();i2++) {
				
				ModeloDisciplina disciplina1;
				ModeloDisciplina disciplina2;
				
				disciplina1 = manterDisciplina.buscarPorId(grades.get(i).getDiciplina()).get();
				disciplina2 = manterDisciplina.buscarPorId(grades.get(i2).getDiciplina()).get();
				
				if(disciplina1.getId_professor()==disciplina2.getId_professor()) { //checa se duas grades com mesmo professor
					
					//System.out.println(grades.get(i).getHora()+" "+grades.get(i2).getHora()+" "+grades.get(i).getDia()+" "+grades.get(i2).getDia());
					
					if( grades.get(i).getHora().equals(grades.get(i2).getHora())&&grades.get(i).getDia().equals(grades.get(i2).getDia())) { //checa se duas grades com mesmo professor estão no mesmo dia e horário
											
						if(alertas==null) {
							alertas = new ArrayList<>();
						}
						
						
						
						alertas.add(new ModeloAlerta("ALERTA", "O professor "+ manterUsuario.buscarUsuarioPorId( disciplina1.getId_professor()).get().getNome()+
								" esta dando duas aulas ao mesmo tempo no "+manterDisciplina.BuscarPeriodoPorId(disciplina1.getId_periodo()).get().getPeriodo_semestre()+" e "
								+manterDisciplina.BuscarPeriodoPorId(disciplina2.getId_periodo()).get().getPeriodo_semestre()+" períodos "+grades.get(i).getDia()+ " "+grades.get(i).getHora()));
						
					}
				}
				
			}
			
		}
		
		return alertas;
		
	}
	
	public List<ModeloAlerta> checarHorario() throws SQLException { //Verifica se o horário possui algum problema retorna uma lista de alertas do tipo 'ModeloAlerta'
		
		List<ModeloAlerta> alertas = null; //lista de possiveis alertas
		List<ModeloAlerta> novosAlertas = null; //lista de alertas secundária
		
		novosAlertas = checarChoque();
		
		if(novosAlertas!=null) {
			
			if(alertas == null) {
				
				alertas = new  ArrayList<>();
			}
			
			alertas = Stream.concat(alertas.stream(), novosAlertas.stream()).collect(Collectors.toList());
			novosAlertas = null;
		}
		
		return alertas;
		
	}
	
	
	
	
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
	public Iterable<Grade> GradeSlotsByPeriodo(Long id_periodo) {
		
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
