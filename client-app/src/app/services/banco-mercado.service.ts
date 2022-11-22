import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { setor } from '../models/setores.model';
import { produtos } from '../models/produtos.model';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class BancoMercadoService {

  constructor(
    private storage : Storage
  ) { }

  criar_setor(setores : setor) {
    setores.id = Guid.create()
    
    this.storage.set
  }
}
