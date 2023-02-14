import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MapDatabaseService {

  constructor(
    private http: HttpClient,
    private navCtrl: NavController
    ) { }

  get_map(){
    this.http.get('')
  }
}
