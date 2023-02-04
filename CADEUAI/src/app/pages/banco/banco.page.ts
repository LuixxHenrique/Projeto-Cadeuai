import { Component } from '@angular/core';
import { Guid } from 'guid-typescript';

import { map } from 'src/app/models/mapa.model';
import { prods } from 'src/app/models/prods.model';
import { setor } from 'src/app/models/setor.model';
import { BancoMercadoService } from 'src/app/services/banco-marcado.service';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.page.html',
  styleUrls: ['./banco.page.scss'],
})
export class BANCOPage {
  // models
  public map: map
  public setor_frios: setor

  public prods: prods

  public show_map: any

  constructor(private banco: BancoMercadoService) { 
    this.banco.retorno_map().then(arraymap => {this.show_map = arraymap})
  }

  ionViewDidEnter(){ //executa toda vez que o pagina é carregada
    this.banco.retorno_map().then(arraymap => {this.show_map = arraymap})
  }

  criar_map(){
    this.map = {
      id: Guid.create(), 
      map_image: 'assets/map/map 1/entrada/entrada1.png',
      caminhos_images: {
        caminho1: 'assets/map/map 1/entrada/setor1.png',
        caminho2: 'assets/map/map 1/entrada/setor2.png'
    }}
    // this.setor_frios = {
    //   id: Guid.create(),
    //   map_id : this.map.id,
    //   nome: 'Frios',
    //   slide_images: '/assets/map/setor_images/frios.png'
    // }

    this.banco.adicionar_map(this.map)
    // this.banco.adicionar_map(this.setor_frios)
  }

}
