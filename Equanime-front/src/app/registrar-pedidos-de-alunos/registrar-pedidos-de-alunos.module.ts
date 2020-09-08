import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarPedidosComponent, NovoPedidoDialog } from './registrar-pedidos/registrar-pedidos.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import {  MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {  FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [RegistrarPedidosComponent,
  NovoPedidoDialog],
  imports: [
    CommonModule,
   MatButtonModule,
   MatInputModule,
   MatIconModule,
   MatDialogModule,
   FormsModule,
   MatTableModule,
   MatTooltipModule
  ],
  providers: [
    MatSnackBar
  ]
})
export class RegistrarPedidosDeAlunosModule { }
