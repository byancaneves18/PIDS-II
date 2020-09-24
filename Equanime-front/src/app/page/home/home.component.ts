import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  panelOpenState : boolean;
  public id:number;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  //  this.panelOpenState = false;
   this.id=this.authService.getUserLogado();
   console.log(this.id);
  }


  pegar(){
    this.id=this.authService.getUserLogado();
  }
  
}
