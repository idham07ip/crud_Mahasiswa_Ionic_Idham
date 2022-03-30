import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatedeletePageRoutingModule } from './updatedelete-routing.module';

import { UpdatedeletePage } from './updatedelete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatedeletePageRoutingModule
  ],
  declarations: [UpdatedeletePage]
})
export class UpdatedeletePageModule {}
