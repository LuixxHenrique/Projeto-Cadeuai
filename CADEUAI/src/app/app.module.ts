import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IonicStorageModule } from '@ionic/storage-angular';

import { AngularFireModule } from 'angularfire2' 
import { AngularFireDatabase } from 'angularfire2/database'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp({
    apiKey: "AIzaSyCjLBB8b26K8OCXPPm0cW8gyrXAYoLsSFg",
    authDomain: "cadeuai-project.firebaseapp.com",
    projectId: "cadeuai-project",
    storageBucket: "cadeuai-project.appspot.com",
    messagingSenderId: "776907303040",
    appId: "1:776907303040:web:abf54785ec5d085e389e65",
    measurementId: "G-5K1N0N2C50"}),
    AngularFireDatabase
  ],
  providers: [ { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

