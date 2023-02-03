import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BANCOPage } from './banco.page';

const routes: Routes = [
  {
    path: '',
    component: BANCOPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BANCOPageRoutingModule {}
