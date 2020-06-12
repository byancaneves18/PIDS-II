import { Component, OnInit} from '@angular/core';
import { Grade } from 'src/app/modelo/grade.modelo';
import { GradeServiceService } from 'src/app/services/grade-service.service';
import { MatDialog } from '@angular/material/dialog';
import { Disciplina } from 'src/app/modelo/disciplina.modelo';
import { DisciplinasServerComunicationService } from 'src/app/services/disciplinas-server-comunication.service';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { Dia } from 'src/app/modelo/dia_semana.modelo';

@Component({
  selector: 'app-montar-periodo',
  templateUrl: './montar-periodo.component.html',
  styleUrls: ['./montar-periodo.component.css']
})

//===========================================================================================================================
//Esse componente representa a estrutura interna da "Tabela" de montar horário, é nele que são carregados os slots de horario
//de acordo com o período selecionado no componente "Montar horário", este componente é dinâmico o que significa que seus 
//valores serão alterados toda vez que o usuário selecionar um perído diferente
//===========================================================================================================================
export class MontarPeriodoComponent implements OnInit {

 
  diasDaSemana : Dia[]; //Variável local que representa os dias da semana vindos do banco de dados é setada toda vez que a página carrega no método 'ngOnInit()'
  horarios : string[] = ['14:50','16:40','19:00','20:40','22:30']; //Variável local que representa as diferentes horas em que pode ocorrer uma aula, por enquanto está estática mas pode facilmente ser implementada a partir do banco de dados
  disciplinas : Disciplina[] = []; //Variável local que representa as disciplinas vindas do banco de dados é setada toda vez que a página carrega no método 'ngOnInit()'
  slots:Grade[] ;//Variável local que representa os elementos grade_horaria do periodo selecionado vindos do banco de dados é setada toda vez que a página carrega no método 'ngOnInit()' ou quando o usuário troca de periodo


  slotsLoaded : boolean = false; //variável que indica se os slots estão atualizados com o banco de dados
  periodo_selecionado:number = 1; // indica o periodo selecionado o periodo periodo id = 1 é carregado como padrão



  //=====================================================INICIALIZAÇÃO======================================================================
  //Métodos que inicializam o componente
  //========================================================================================================================================

  constructor(
    public dialog: MatDialog, 
    private backDisciplinas: DisciplinasServerComunicationService, //serviço de acesso a interface 'ApiDisciplinas' do backend
    private eventEmitterService: EventEmitterService , //serviço responsavel por comunicar eventos entre os componentes por exemplo: passar uma variável ou exigir uma ação em outro componente
    private backMontarHorario: GradeServiceService //serviço de acesso a interface 'ApiMontarHorário' do backend
    ) {
    
  }

  ngOnInit() {
    this.getDisciplinas();
    this.loadSlots(1); //carregando periodo id = 1 como padrão
    this.getDiasDaSemana();

    if (this.eventEmitterService.subsVarMudarPeriodo==undefined) {    //inscrição ao EventEmitter necessária na classe onde se deseja chamar um método atravez de um evento, nesse caso para o metodo 'mudarPeriodo'
      this.eventEmitterService.subsVarMudarPeriodo = this.eventEmitterService.    
      mudarPeriodoEmitter.subscribe((id_periodo:number) => {    
        this.mudarPeriodo(id_periodo);    
      });    
    } 
  }


  //=====================================================VERIFICAÇÃO=======================================================================
  //Métodos que verificam a existencia de uma variável, isso é necessário pois eu não posso por exemplo: tentar preencher o cabeçalho de
  //períodos sem antes ter carregado os períodos do banco de dados, então normalmente atravez da diretiva '*ngIf' o html verifica a 
  //existencia da variável, caso não exista o mesmo fica impedido de continuar 
  //========================================================================================================================================


  isDiasCarregado():boolean{ //Retorna true se foram carregados dias da semana do back

    if(this.diasDaSemana!=null&&this.diasDaSemana[0]!=null){
      return true;
    }else{
      return false;
    }

  }

  isSlotCarregado():boolean{ //retorna true se os slots ja foram carregados do banco

    return this.slotsLoaded;
 
  }

  isVazio(hora:string,dia:string):boolean{// verifica se o slot na hora/dia informados esta preenchido por alguma disciplina ou se está vazio, em caso de vazio retorn true

    var i = 0;
    while(this.slots[i]!=null){
      if(this.slots[i].hora==hora&&this.slots[i].dia==dia){
        return false;
      }
      i++;
    }
    return true;
  }


  isPosicionadaAqui(id_disciplina:number,hora:string,dia:string){//verifica se uma dada disciplina está posicionada em uma certa hora e dia na tabela, caso esteja retorna true
 
    var i = 0;

    while(this.slots[i]!=null){
      if(this.slots[i].diciplina==id_disciplina&&this.slots[i].hora==hora&&this.slots[i].dia==dia){
        return true;
      }
      i++;
    }
   
   return false;
 }


  //=====================================================SERVIDOR===========================================================================
  //Métodos que usam o serviço de acesso ao servidor para desempenhar ações no memso
  //========================================================================================================================================

  getDiasDaSemana(){ // busca os dias da semana gravados no back e grava na variavel 'diasDaSemana'
    this.backMontarHorario.getDiasSemana().subscribe(dados =>{
      this.diasDaSemana = dados;
    });
  }


  loadSlots(id_periodo:number){//Carrega os slots de horário do periodo selecionado a partir do banco de dados em uma variavel, após o carregamento seta os slots como carregado na variavel 'slotsLoaded = true'

    this.backMontarHorario.getGradesByPeriodo(id_periodo).subscribe( 
      (data: Grade[]) => {
        this.slots = data;
        this.slotsLoaded = true;
      }
    );
      
  }

  setGradeSlot( hora:string,dia:string,disciplina){ //Chamada quando uma alteração é feita no horário, esse método analisa a alteração e a encaminha para o servidor se necessario
    
    var i = 0
    var existe : boolean = false; //true se o slot que pretende se alterar ja existe
    var gradeSeExistir : Grade; // caso o slot exista ele fica armazenado aqui para futuras operações

    while(this.slots[i]!=null){ //percorre a lista de slots para verificar se o slot que pretende se alterar ja existe ou se é novo
       if(this.slots[i].hora==hora&&this.slots[i].dia==dia){
         existe = true;
         gradeSeExistir = this.slots[i];
       }
       i++;
     }

     //=========Verifica a solicitação e a encaminha aqui ===========

     if(existe&&disciplina == -1){ //disciplina = -1 significa horário vago, ou seja se esse horario existe e está armazenado deve ser deletado

      this.backMontarHorario.deleteGrade(gradeSeExistir).subscribe(dados =>{
        this.eventEmitterService.atualizar();
      });

     }else if(existe){ // se o horario existe no banco e não está sendo setado como vazio então ele deve ser editado

      this.backMontarHorario.editGrade(gradeSeExistir).subscribe(dados =>{
        this.eventEmitterService.atualizar();
      });

     }else if(disciplina != -1){ // se o horario não existe e não esta sendo setado como vazio então ele deve ser criado, caso contrário ou seja não existe e esta sendo setado como vazio nada precisa ser feito

      let novaGrade : Grade;

      novaGrade = {
        dia : dia,
        diciplina : disciplina,
        hora : hora,
        id : -1, //id sera gerado no back de qualquer forma quando criado um novo elemento
        id_periodo : this.periodo_selecionado
  
      }
  
      this.backMontarHorario.setGrade(novaGrade).subscribe(dados =>{
        this.eventEmitterService.atualizar();
      });

     }


  }

  getDisciplinas(){   // Função utilizada pra pegar uma lista completa de disciplinas no back
    
    this.backDisciplinas.getDisciplinasLista().subscribe(
      (data: any[]) => {
        this.disciplinas = data;
      }
    );

  }

  //=====================================================AÇÃO==============================================================================
  //Métodos chamados quando uma ação é feita no front
  //========================================================================================================================================

  mudarPeriodo(id_novoPeriodo:number){ //chamado quando o usuario muda de periodo na tabela

    this.slots = null;  //Quando se muda de periodo os slots são resetados para serem novamente preenchidos com slots do novo periodo selecionado
    this.slotsLoaded= false;
    this.periodo_selecionado = id_novoPeriodo;
    this.loadSlots(id_novoPeriodo);
  }

}

