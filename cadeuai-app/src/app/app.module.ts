import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IonicStorageModule } from '@ionic/storage-angular';
import { QRScanner} from '@ionic-native/qr-scanner/ngx';

import { environment } from 'src/environments/environment';


import { getFirestore, provideFirestore } from '@angular/fire/firestore';


import { initializeApp, provideFirebaseApp } from '@angular/fire/app';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(),
    AppRoutingModule, provideFirebaseApp(()=> initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())],
  providers: [QRScanner, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})

export class AppModule {}
