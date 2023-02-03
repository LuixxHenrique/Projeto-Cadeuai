import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { Guid } from 'guid-typescript';
import { map } from '../models/mapa.model';

@Injectable({
  providedIn: 'root'
})
export class BancoMercadoService {

  constructor(
    private storage : Storage
  ) { }

  async retorno_map(){
    let arraymap: map [] = []

    await this.storage.forEach((value: string) => 
        {const contato: map = JSON.parse(value); arraymap.push(contato)})

    return arraymap
  }

}