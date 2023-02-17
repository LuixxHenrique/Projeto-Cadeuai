import { Component } from '@angular/core';
import { maps } from 'src/app/modal/maps.model';
import { MapDatabaseService } from 'src/app/services/map-database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.page.html',
  styleUrls: ['./banco.page.scss'],
})
export class BancoPage {
  public map: Observable<maps[]>

  constructor(
    
    private map_s: MapDatabaseService
    ) {
      this.map = this.map_s.getmaps();
    }
    

}
