import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { map } from '../models/mapa.model';

@Injectable({
  providedIn: 'root'
})
export class BancoMercadoService {

  constructor(
    private storage : Storage
  ) { }

  async adicionar_map(model){
    this.storage.set(model.id.toString(), JSON.stringify(model))
  }
  
  async retorno_map(){
    let arraymap: map [] = []

    await this.storage.forEach((value: string) => 
        {const contato: map = JSON.parse(value); arraymap.push(contato)})

    return arraymap
  }

}