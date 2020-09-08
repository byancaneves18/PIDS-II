import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/login/usuario';
import { RecuperarService} from 'src/app/services/recuperar-service.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {
  public usuario: Usuario = new Usuario();
  resgate: boolean = false;
  nresgate: boolean = true;
  constructor(private router: Router, private recuperarService: RecuperarService) { }

  ngOnInit(): void {
  }

  recuperar(){
    
    console.log("função recuperar");
    console.log(this.usuario);
    this.recuperarService.testarRecuperar(this.usuario).subscribe(resgate=>{
        this.resgate=resgate;
        this.nresgate=resgate;
        console.log(this.nresgate);
       this.recuperarService.getRecuperar(resgate, this.usuario);
    })
  }
  cancelar(){
    this.router.navigate(['/login']);
  }
  
}
