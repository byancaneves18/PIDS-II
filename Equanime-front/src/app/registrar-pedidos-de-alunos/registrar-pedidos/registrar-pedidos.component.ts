import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { PedidosAlunoServerService } from 'src/app/services/pedidos-aluno-server.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PedidoAluno } from 'src/app/modelo/pedidosAluno.modelo';

@Component({
  selector: 'app-registrar-pedidos',
  templateUrl: './registrar-pedidos.component.html',
  styleUrls: ['./registrar-pedidos.component.css']
})
export class RegistrarPedidosComponent implements OnInit {
 
  displayedColumns: string[] = ['position', 'pedido'];
  dataSource: PedidoAluno[] = [{	
    id:0,
    pedido:'aaaaa',
    atendido:false
  },{	
    id:0,
    pedido:'aaaaa',
    atendido:false
  },{	
    id:0,
    pedido:'aaaaa',
    atendido:false
  }];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  novoPedido(){

    const dialogRef = this.dialog.open(NovoPedidoDialog, {
      width: '300px'
    });

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
    private snackBar: MatSnackBar //Snackbar para mostrar erros
    ) {}

  onNoClick(){
    this.dialogRef.close();
  }

  salvar(){

    this.backPedidos.novoPedido({	
      id:0,
      pedido:this.pedido,
      atendido:false
    }).subscribe(success=>{console.log('sucesso')},error => this.snackBar.open('Erro ao salvar pedido :c', 'Ok',{duration: 10000,}));

    this.dialogRef.close();   
  }



}
