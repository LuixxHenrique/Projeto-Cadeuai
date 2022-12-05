import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriacaoPageRoutingModule } from './criacao-routing.module';

import { CriacaoPage } from './criacao.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriacaoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CriacaoPage]
})
export class CriacaoPageModule {}
