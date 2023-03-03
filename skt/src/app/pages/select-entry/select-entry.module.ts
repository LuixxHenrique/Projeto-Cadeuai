import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectEntryPageRoutingModule } from './select-entry-routing.module';

import { SelectEntryPage } from './select-entry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectEntryPageRoutingModule
  ],
  declarations: [SelectEntryPage]
})
export class SelectEntryPageModule {}
