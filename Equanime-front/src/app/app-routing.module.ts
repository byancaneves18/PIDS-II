import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { UsuarioComponent } from './page/usuario/usuario.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'montar', component: LoginComponent },
  { path: 'usuario', component:UsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
