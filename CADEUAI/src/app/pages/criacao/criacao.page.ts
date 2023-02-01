import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera'

import { Guid } from 'guid-typescript';
import { produtos } from 'src/app/models/produtos.model';
import { setor } from 'src/app/models/setores.model';
import { BancoMercadoService } from 'src/app/services/banco-marcado.service'

@Component({
  selector: 'app-criacao',
  templateUrl: './criacao.page.html',
  styleUrls: ['./criacao.page.scss'],
})
export class CriacaoPage implements OnInit {
  public setorFgroup : FormGroup
  public produFgroup : FormGroup
  public setor_model : setor
  public produ_model : produtos

  constructor(
    private formBuilder: FormBuilder,
    private service : BancoMercadoService
  ) { }


  ngOnInit() {}
}
