import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { UsuarioComponent } from './page/usuario/usuario.component';
import { ListarComponent} from './disciplina/listar/listarDisciplinas.component';
import { CriarComponent } from './disciplina/criar/criar.component';
import { EditarComponent } from './disciplina/editar/editar.component';
import { ListarRedirectComponent } from './disciplina/listar-redirect/listar-redirect.component';
import { MontarHorarioComponent } from './montar-horario/montar-horario.component';
import { CadastrarUsuarioComponent } from './page/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { AlterarUsuarioComponent } from './page/usuario/alterar-usuario/alterar-usuario.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'montar', component: MontarHorarioComponent },
  { path: 'usuario', component: UsuarioComponent},
  { path: 'usuario/cadastrar', component: CadastrarUsuarioComponent},
  { path: 'usuario/alterar', component: AlterarUsuarioComponent},
  { path: 'disciplinas', component: ListarComponent},
  {path: 'disciplinas/nova', component: CriarComponent},
  {path: 'disciplinas/editar/:id', component: EditarComponent},
  {path: 'disciplinas/redirect', component: ListarRedirectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
