import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { PedidosAlunoServerService } from 'src/app/services/pedidos-aluno-server.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PedidoAluno } from 'src/app/modelo/pedidosAluno.modelo';
import { EventEmitterService } from 'src/app/services/event-emitter.service';

@Component({
  selector: 'app-registrar-pedidos',
  templateUrl: './registrar-pedidos.component.html',
  styleUrls: ['./registrar-pedidos.component.css']
})
export class RegistrarPedidosComponent implements OnInit {
 
  displayedColumns: string[] = ['acao', 'pedido'];
  dataSource: PedidoAluno[] = [];

  constructor(
    public dialog: MatDialog,
    public backPedidos: PedidosAlunoServerService,
    private snackBar: MatSnackBar,
    private eventEmitterService: EventEmitterService ) { }

  ngOnInit(): void {
    this.listarPedidos();

    if (this.eventEmitterService.subsVaratualizarPedidos==undefined) {    //inscrição ao EventEmitter necessária na classe onde se deseja chamar um método atravez de um evento
      this.eventEmitterService.subsVaratualizarPedidos= this.eventEmitterService.    
      atualizarPedidosEmitter.subscribe(() => {    
        this.listarPedidos(); 
      });    
    } 
  }

  novoPedido(){

    const dialogRef = this.dialog.open(NovoPedidoDialog, {
      width: '300px'
    });

  }

  deletarPedido(pedido:PedidoAluno){

    this.backPedidos.excluirPedido(pedido).subscribe(success=>{console.log('sucesso');this.listarPedidos()},error => this.snackBar.open('Erro ao excluir pedido :c', 'Ok',{duration: 10000,}));

  }

  listarPedidos(){

     this.backPedidos.listarPedidos().subscribe(
      data=>{
        this.dataSource = data;
      },
      error => this.snackBar.open('Erro ao listar pedidos :c', 'Ok',{duration: 10000,}));

  }

}


 

@Component({
  selector: 'novo-pedido-dialog',
  templateUrl: 'novo-pedido-dialog.html',
})
export class NovoPedidoDialog {

  pedido :string;

  constructor(
    public dialogRef: MatDialogRef<NovoPedidoDialog>,
    public backPedidos: PedidosAlunoServerService,
    private snackBar: MatSnackBar, //Snackbar para mostrar erros
    private eventEmitterService: EventEmitterService
  ) {}

   
   
  onNoClick(){
    this.dialogRef.close();
  }

  salvar(){

    this.backPedidos.novoPedido({	
      id:0,
      pedido:this.pedido,
      atendido:false
    }).subscribe(success=>{console.log('sucesso'); this.eventEmitterService.atualizarPedidos()},error => this.snackBar.open('Erro ao salvar pedido :c', 'Ok',{duration: 10000,}));

    this.dialogRef.close();   
  }



}
