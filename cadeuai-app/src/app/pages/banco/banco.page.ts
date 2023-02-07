import { Component } from '@angular/core';
import { Guid } from 'guid-typescript';

// import { mapa } from 'src/app/models/mapa.model';
import { BancoMercadoService } from 'src/app/services/banco-mercado.service';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.page.html',
  styleUrls: ['./banco.page.scss'],
})
export class BancoPage {

  // models
  // public map: mapa

  public show_map: any

  constructor(private banco: BancoMercadoService) { 
  //   this.banco.retorno_map().then(arraymap => {this.show_map = arraymap})
  // }

  // ionViewDidEnter(){ //executa toda vez que o pagina é carregada
  //   this.banco.retorno_map().then(arraymap => {this.show_map = arraymap})
  }

  // criar_map(){
  //   this.map = {
  //     id: Guid.create(), 
  //     map_image: 'assets/map/map 1/entrada/entrada1.png',
  //     caminhos_images: {
  //       caminho1: 'assets/map/map 1/entrada/setor1.png',
  //       caminho2: 'assets/map/map 1/entrada/setor2.png'
  //   }}

  //   this.banco.adicionar_map(this.map)
  // }

}

