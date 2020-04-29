import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { UsuarioComponent } from './page/usuario/usuario.component';
import {ListarComponent} from './disciplina/listar/listarDisciplinas.component'
import { CriarComponent } from './disciplina/criar/criar.component';
import { EditarComponent } from './disciplina/editar/editar.component';

 

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'montar', component: LoginComponent },
  { path: 'usuario', component:UsuarioComponent},
  { path: 'disciplinas', component: ListarComponent},
  {path: 'disciplinas/nova', component: CriarComponent},
  {path: 'disciplinas/editar/:id', component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
