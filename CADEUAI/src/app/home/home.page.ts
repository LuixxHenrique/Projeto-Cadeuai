import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  public image_path =  '' 
  public image = String
  
  constructor() {}

  routeSelect(value:Number){
    if (value == 1){
      this.image_path =  'assets/map/]/entrada/setor1.png'
    }
    if (value == 2){
      this.image_path = 'assets/map/]/entrada/setor2.png'
    }
  }                                                                                                                                      

}