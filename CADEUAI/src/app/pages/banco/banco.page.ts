import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Storage } from '@ionic/storage-angular';

import { map } from 'src/app/models/mapa.model';
import { prods } from 'src/app/models/prods.model';
import { setor } from 'src/app/models/setor.model';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.page.html',
  styleUrls: ['./banco.page.scss'],
})
export class BANCOPage implements OnInit {
  public map: map
  public setor: setor
  public prods: prods

  constructor(
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  criar_map(){
    this.map = {
      id: Guid.create(), 
      map_image: 'assets/map/map 1/entrada/entrada1.png',
      caminhos_images: {
        caminho1: 'assets/map/map 1/entrada/setor1.png',
        caminho2: 'assets/map/map 1/entrada/setor2.png'
    }}
    this.storage.set(this.map.id.toString(), JSON.stringify(this.map))
  }

}
