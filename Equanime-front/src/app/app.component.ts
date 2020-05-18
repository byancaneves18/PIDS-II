import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'equanime-front';
  opened:boolean = true;

  constructor(private router: Router) { 




  }

  Disciplinas(){

    this.router.navigate(['/disciplinas']);

  }


  MontarHorario(){

    this.router.navigate(['/montar']);

  }


  Usuarios(){

    this.router.navigate(['/usuario']);

  }


}
