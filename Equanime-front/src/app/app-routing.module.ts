import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './page/usuario/usuario.component';
import { ListarComponent} from './disciplina/listar/listarDisciplinas.component';
import { CriarComponent } from './disciplina/criar/criar.component';
import { EditarComponent } from './disciplina/editar/editar.component';
import { MontarHorarioComponent } from './montar-horario/montar-horario.component';
import { CadastrarUsuarioComponent } from './page/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { AuthGuard } from './login/valido/auth-guard/auth-guard.component';
import { RegistrarPedidosComponent } from './registrar-pedidos-de-alunos/registrar-pedidos/registrar-pedidos.component'
import { HomeComponent } from './page/home/home.component';
import { VincularProfDisciplinaComponent } from './vincular-prof-disciplina/vincular-prof-disciplina.component';


/*
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'montar', component: MontarHorarioComponent },
  { path: 'usuario', component: UsuarioComponent},
  { path: 'usuario/cadastrar', component: CadastrarUsuarioComponent},
  { path: 'usuario/alterar', component: AlterarUsuarioComponent},
  { path: 'disciplinas', component: ListarComponent},
  { path: 'disciplinas/nova', component: CriarComponent},
  { path: 'disciplinas/editar/:id', component: EditarComponent},
  { path: 'disciplinas/redirect', component: ListarRedirectComponent},
  { path: 'alunos/pedido', component: RegistrarPedidosComponent}
*/


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'montar', component: MontarHorarioComponent, canActivate: [AuthGuard]},
  { path: 'recuperar', component: RecuperarComponent},
  { path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuard]},
  { path: 'usuario/cadastrar', component: CadastrarUsuarioComponent, canActivate: [AuthGuard]},
  { path: 'disciplinas', component: ListarComponent, canActivate: [AuthGuard]},
  { path: 'disciplinas/nova', component: CriarComponent, canActivate: [AuthGuard]},
  { path: 'disciplinas/editar/:id', component: EditarComponent, canActivate: [AuthGuard]},
  { path: 'alunos/pedido', component: RegistrarPedidosComponent},
  { path: 'vincular', component: VincularProfDisciplinaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
