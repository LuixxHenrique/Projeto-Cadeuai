import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor() { 
    SplashScreen.show({
      autoHide: true,
      showDuration: 2000
    });
  }
  
  ngOnInit() {
    console.log('Tá deveno jão')
  }

}
