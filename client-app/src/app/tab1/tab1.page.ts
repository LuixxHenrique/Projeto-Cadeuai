import { Component } from '@angular/core';

import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Guid } from 'guid-typescript'

import { BancoMercadoService } from '../services/banco-mercado.service';
import { setor } from '../models/setores.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public formu : FormGroup
  public setor : setor

  constructor(
    private formuBilder : FormBuilder,
    private dados : BancoMercadoService
  ) {}

  criar_setor(){
    if (this.formu.valid){
      this.dados.criar_setor(this.formu.value)
    }
  }

  async ngOnInit(){
    this.setor = {id: Guid.createEmpty(), nome: ''}

    this.formu = this.formuBilder.group(
      {nome: [this.setor.nome, Validators.required]}
    )
  }
}
