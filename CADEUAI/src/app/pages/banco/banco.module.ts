import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BANCOPageRoutingModule } from './banco-routing.module';

import { BANCOPage } from './banco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BANCOPageRoutingModule
  ],
  declarations: [BANCOPage]
})
export class BANCOPageModule {}
