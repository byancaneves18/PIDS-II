import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';



export interface PeriodicElement {
  nome:string;
  cpf: number;
  cargaHoraria: string;
  papel: string;
  email: string;
  // name: string;
  // position: number;
  // weight: number;
  // symbol: string;
}

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
/*
  ELEMENT_DATA: PeriodicElement[] = [
    {nome:'monkey', cpf: 78987774814, cargaHoraria: 'Prof',papel: 'prf',email:'string' },
    {nome:'Crazy', cpf: 78987774814, cargaHoraria: 'Prof',papel: 'prf',email:'string' },
    {nome:'Trenzin', cpf: 78987774814, cargaHoraria: 'Prof',papel: 'prf',email:'string' },
    {nome:'Teste', cpf: 78987774814, cargaHoraria: 'Prof',papel: 'prf',email:'string' },
    {nome:'Etc', cpf: 78987774814, cargaHoraria: 'Prof',papel: 'prf',email:'string' },
    {nome:'Alo', cpf: 78987774814, cargaHoraria: 'Prof',papel: 'prf',email:'string' },
    {nome:'Chitao', cpf: 78987774814, cargaHoraria: 'Prof',papel: 'prf',email:'string' },
    {nome:'Stronda', cpf: 78987774814, cargaHoraria: 'Prof',papel: 'prf',email:'string' },
    {nome:'Mickey', cpf: 78987774814, cargaHoraria: 'Prof',papel: 'prf',email:'string' },
    {nome:'Mouse', cpf: 78987774814, cargaHoraria: 'Prof',papel: 'prf',email:'string' },
  ];
  resultsLength:number = 0;
  displayedColumns: string[] = ['button','nome', 'cpf', 'cargaHoraria', 'papel','email'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);*/

  /** Whether the number of selected elements matches the total number of rows. */
  /*isAllSelected() {
    const numRows = this.dataSource.data.length;
  }*/

  cars: PeriodicElement[] = [
    {nome:'monkey', cpf: 78987774814, cargaHoraria: 'Prof',papel: 'prf',email:'string' },
    {nome:'Crazy', cpf: 78987774814, cargaHoraria: 'Prof',papel: 'prf',email:'string' },
    {nome:'Trenzin', cpf: 78987774814, cargaHoraria: 'Prof',papel: 'prf',email:'string' },
    {nome:'Teste', cpf: 78987774814, cargaHoraria: 'Prof',papel: 'prf',email:'string' },
    {nome:'Etc', cpf: 78987774814, cargaHoraria: 'Prof',papel: 'prf',email:'string' },
    {nome:'Alo', cpf: 78987774814, cargaHoraria: 'Prof',papel: 'prf',email:'string' },
    {nome:'Chitao', cpf: 78987774814, cargaHoraria: 'Prof',papel: 'prf',email:'string' },
    {nome:'Stronda', cpf: 78987774814, cargaHoraria: 'Prof',papel: 'prf',email:'string' },
    {nome:'Mickey', cpf: 78987774814, cargaHoraria: 'Prof',papel: 'prf',email:'string' },
    {nome:'Mouse', cpf: 78987774814, cargaHoraria: 'Prof',papel: 'prf',email:'string' },
  ];
  cols: any[];

    first = 0;

    rows = 10;
  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'cpf', header: 'CPF' },
      { field: 'cargaHoraria', header: 'Carga Horaria' },
      { field: 'papel', header: 'Papel' },
      { field: 'email', header: 'Email' }
  ];
  }
  next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}

isLastPage(): boolean {
    return this.first === (this.cars.length - this.rows);
}

isFirstPage(): boolean {
    return this.first === 0;
}

  

}
