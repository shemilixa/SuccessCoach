import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { File } from '@ionic-native/file/ngx';

import { IonicModule } from '@ionic/angular';

import { NewtargetPage } from './newtarget.page';

const routes: Routes = [
  {
    path: '',
    component: NewtargetPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    File
  ],
  declarations: [NewtargetPage]
})
export class NewtargetPageModule {}
