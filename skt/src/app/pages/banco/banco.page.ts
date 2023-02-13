import { Component } from '@angular/core';
import { MapDatabaseService } from 'src/app/services/map-database.service';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.page.html',
  styleUrls: ['./banco.page.scss'],
})
export class BancoPage {

   // models
  // public map: mapa

  public show_map: any

  // private banco: BancoMercadoService
  constructor(private db:MapDatabaseService) {}

}
