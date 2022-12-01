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
    
    this.storage.set(setores.id.toString(), JSON.stringify(setores))
  }
  criar_produ(prods : produtos){
    prods.id = Guid.create()

    this.storage.set(prods.id.toString(), JSON.stringify(prods))
  }

  async select_tudo(){
    let arraysetor: setor [] = []

    await this.storage.forEach((value: string) => 
        {const setor: setor = JSON.parse(value); arraysetor.push(setor)})

    return arraysetor
  }

}