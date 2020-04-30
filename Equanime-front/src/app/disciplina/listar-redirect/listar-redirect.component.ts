import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-redirect',
  templateUrl: './listar-redirect.component.html',
  styleUrls: ['./listar-redirect.component.css']
})
export class ListarRedirectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.router.navigate(['/disciplinas']);
  }

}
