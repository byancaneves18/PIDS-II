import { Component, OnInit, Input, Inject } from '@angular/core';
import { Usuarios } from 'src/app/modelo/usuario.modelo';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Input() usuario: Usuarios = new Usuarios();
  teste:string = "trenzin"

  constructor(private serviceUsuario: UsuarioServiceService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuarios) { }

  ngOnInit(): void {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deletar(){
    this.serviceUsuario.deletarUsuario(this.data).subscribe();
  }

}
