import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatedeletePage } from './updatedelete.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatedeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatedeletePageRoutingModule {}
