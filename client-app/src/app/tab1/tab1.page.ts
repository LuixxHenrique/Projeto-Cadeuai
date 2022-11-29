import { Component } from '@angular/core';

import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Guid } from 'guid-typescript'

import { BancoMercadoService } from '../services/banco-mercado.service';
import { setor } from '../models/setores.model';
import { produtos } from '../models/produtos.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public formu_setor : FormGroup
  public formu_prod : FormGroup
  public setor : setor
  public prods : produtos

  constructor(
    private formuBilder : FormBuilder,
    private dados : BancoMercadoService
  ) {}

  criar_setor(){
    if (this.formu_setor.valid){
      this.dados.criar_setor(this.formu_setor.value)
    }
  }
  get_setor(){
    this.dados.achar_setor(this.prods.nome).then(nome => this.prods.setor = nome)
  }

  async ngOnInit(){
    this.setor = {id: Guid.createEmpty(), nome: ''}
    this.prods = {id: Guid.createEmpty(), nome: '', setor: Guid.createEmpty(), valor: ''}

    this.formu_setor = this.formuBilder.group({
      id: [this.setor.id],
      nome: [this.setor.nome, Validators.required]
    })

    this.formu_prod = this.formuBilder.group({
      id: [this.prods.id],
      setor: [this.prods.setor, Validators.required],
      nome: [this.prods.nome, Validators.required],
      valor: [this.prods.valor, Validators.required]
    })
  }
}
