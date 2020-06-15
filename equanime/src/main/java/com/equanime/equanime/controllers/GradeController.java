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
import com.equanime.equanime.models.ModeloDisponibilidadeProfessor;
import com.equanime.equanime.repository.DiaSemanaRepository;
import com.equanime.equanime.repository.DisponibilidadeProfessorRepository;
import com.equanime.equanime.repository.GradeRepository;
import com.equanime.equanime.repository.TurnoRepository;


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
	@Autowired
	DisponibilidadeProfessorRepository disponibilidadeRepository;
	@Autowired
	TurnoRepository turnoRepository;
	
	
	public List<ModeloAlerta> checarDisponibilidades() throws SQLException{ //Verifica se as aulas estão de acordo com as preferencias dos professores
		
		
		List<Grade> grades ; //lista de grades pertencentes a algum dia da semana
		List<ModeloAlerta> alertas = null; //lista de possiveis alertas
		List<ModeloDisponibilidadeProfessor> disponibilidades = (List<ModeloDisponibilidadeProfessor>) disponibilidadeRepository.findAll(); // todos os elementos de disponibilidade guardados no bando
		
		
		
		for (ModeloDisponibilidadeProfessor disponibilidade : disponibilidades) {
			
			
			grades = (List<Grade>) gradeRepository.findGradeByDiaSemana(diaRepository.findById(disponibilidade.getIdSemana()).get().getDia_semana()); // Se tal disponibilidade se refere a sexta aqui são pegos os elementos grade da sexta feira
			List<Grade> gradesProfessor = new ArrayList<>();//Grades do professor dono da disponibilidade no dia da semana da disponibilidade
			
			for (Grade grade: grades) {
				
				
				if(manterDisciplina.buscarPorId(grade.getDiciplina()).get().getId_professor()==disponibilidade.getIdUsuario() ) {
					
				
					gradesProfessor.add(grade);
				}
			}
			
			
			for (Grade grade: gradesProfessor) {
				
				
				
				if(grade.getHora()=="19:00"||grade.getHora()=="20:40"||grade.getHora()=="22:30") {
					
					if(turnoRepository.findById(disponibilidade.getIdTurno()).get().getNome().equals("NOTURNO")||turnoRepository.findById(disponibilidade.getIdTurno()).get().getNome().equals("VESPERTINO-NOTURNO")) {
						
						if(alertas==null) {
							alertas = new ArrayList<>();
						}
						ModeloAlerta alerta = new ModeloAlerta("AVISO","Professor "+manterUsuario.buscarUsuarioPorId(disponibilidade.getIdUsuario()).get().getNome()+
																"Não gosta de dar aulas "+diaRepository.findById(disponibilidade.getIdSemana()).get().getDia_semana()+
																" no turno "+turnoRepository.findById(disponibilidade.getIdTurno()).get().getNome()); //Geração da mensagem
						
						alertas.add(alerta);
					}
					
					
				}else {
					
					
					
					if(turnoRepository.findById(disponibilidade.getIdTurno()).get().getNome().equals("VESPERTINO")||turnoRepository.findById(disponibilidade.getIdTurno()).get().getNome().equals("VESPERTINO-NOTURNO")) {
						
						
						if(alertas==null) {
							alertas = new ArrayList<>();
						}
						ModeloAlerta alerta = new ModeloAlerta("AVISO","Professor "+manterUsuario.buscarUsuarioPorId(disponibilidade.getIdUsuario()).get().getNome()+
																" Não gosta de dar aulas "+diaRepository.findById(disponibilidade.getIdSemana()).get().getDia_semana()+
																" no turno "+turnoRepository.findById(disponibilidade.getIdTurno()).get().getNome()); //Geração da mensagem
						
						alertas.add(alerta);
						
					}
					
					
				}
			}
			
			
		}
		
		return alertas;
	}
	
	
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
					
					
					
					
					if( grades.get(i).getHora().equals(grades.get(i2).getHora())&&grades.get(i).getDia().equals(grades.get(i2).getDia())) { //checa se duas grades com mesmo professor estão no mesmo dia e horário
											
						if(alertas==null) {
							alertas = new ArrayList<>();
						}
						
						
						
						alertas.add(new ModeloAlerta("ALERTA", "O professor "+ manterUsuario.buscarUsuarioPorId( disciplina1.getId_professor()).get().getNome()+
								" esta dando duas aulas ao mesmo tempo no "+manterDisciplina.BuscarPeriodoPorId(grades.get(i).getId_periodo()).get().getPeriodo_semestre()+" e "
								+manterDisciplina.BuscarPeriodoPorId(grades.get(i2).getId_periodo()).get().getPeriodo_semestre()+" períodos "+grades.get(i).getDia()+ " "+grades.get(i).getHora()));
						
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
		
		
		novosAlertas = checarDisponibilidades();
		
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
