import { Component } from '@angular/core';
import { MapDatabaseService } from 'src/app/services/map-database.service';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.page.html',
  styleUrls: ['./banco.page.scss'],
})
export class BancoPage {

  constructor(
    private db:MapDatabaseService
    ) {}


  ionViewDidLoad(){
    
  }

}
