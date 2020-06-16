import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GradeServiceService } from '../services/grade-service.service';
import { DisciplinasServerComunicationService } from '../services/disciplinas-server-comunication.service';
import { Periodo } from '../modelo/periodo.modelo';
import { EventEmitterService } from '../services/event-emitter.service';
import { Dia } from '../modelo/dia_semana.modelo';
import { Alerta } from '../modelo/alerta.modelo';




@Component({
  selector: 'app-montar-horario',
  templateUrl: './montar-horario.component.html',
  styleUrls: ['./montar-horario.component.css']
})

//===========================================================================================================================
//Esse componente representa a estrutura externa da "Tabela" de montar horário, contém os cabeçalhos e também é nele onde se
//seleciona os períodos, a parte que exibe o conteúdo da "tabela" foi movida para um componente separado para evitar código
//repetido 
//===========================================================================================================================
export class MontarHorarioComponent implements OnInit{

  periodos :Periodo[] = []; //variável local que representa os períodos vindos do banco de dados é setada toda vez que a página carrega no método 'ngOnInit()'
  diasDaSemana : Dia[]; // variável local que representa os dias da semana vindos do banco de dados é setada toda vez que a página carrega no método 'ngOnInit()'
  alertas: Alerta[] =[]; // alertas que aparecem caso algo esteja errado no horário




  //=====================================================INICIALIZAÇÃO======================================================================
  //Métodos que inicializam o componente
  //========================================================================================================================================

  constructor(
    private backMontarHorario: GradeServiceService, //serviço de acesso a interface 'ApiMontarHorário' do backend
    public dialog: MatDialog, 
    private BackDisciplinas: DisciplinasServerComunicationService, //serviço de acesso a interface 'ApiDisciplinas' do backend
    private eventEmitterService: EventEmitterService  //serviço responsavel por comunicar eventos entre os componentes por exemplo: passar uma variável ou exigir uma ação em outro componente
    ) {
    
  }

  ngOnInit() {
    this.getPeriodos();
    this.getDiasDaSemana();
    this.getAlertas();

    if (this.eventEmitterService.subsVaratualizar==undefined) {    //inscrição ao EventEmitter necessária na classe onde se deseja chamar um método atravez de um evento, nesse caso para o metodo 'getAlertas'
      this.eventEmitterService.subsVaratualizar= this.eventEmitterService.    
      atualizarEmitter.subscribe(() => {    
        this.getAlertas();   
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

  isPeriodosCarregado():boolean{ //Retorna true se foram carregados periodos do banco de

    if(this.periodos!=null&&this.periodos[0]!=null){
      return true;
    }else{
      return false;
    }

  }


  //=====================================================SERVIDOR===========================================================================
  //Métodos que usam o serviço de acesso ao servidor para desempenhar ações no memso
  //========================================================================================================================================


  getAlertas(){//buscar alertas no back e grava na variável
    this.alertas = null;
    this.backMontarHorario.getAlertas().subscribe(dados=>{
      this.alertas = dados;
    });

    console.log("get alertas");

  }

  getDiasDaSemana(){ // busca os dias da semana gravados no back
    this.backMontarHorario.getDiasSemana().subscribe(dados =>{

      this.diasDaSemana = dados;

    });
  }

  getPeriodos(){ //Pega os periodos do back e joga em uma variavel

    this.BackDisciplinas.getPeriodosLista().subscribe( dados =>{

      this.periodos = dados;
      
    });

  }

  //=====================================================AÇÃO==============================================================================
  //Métodos chamados quando uma ação é feita no front
  //========================================================================================================================================



  selecionarPeriodo(id_periodo:number){ //chamado quando o usuario seleciona um periodo na tabela

    this.eventEmitterService.mudarPeriodo(id_periodo); //notifica o componente 'montar-periodo' da mudança de periodo atravez de um event Emitter

  }

}


