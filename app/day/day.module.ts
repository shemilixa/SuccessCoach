import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DayPage } from './day.page';
import { AddtargetComponent } from './addtarget/addtarget.component';

const routes: Routes = [
  {
    path: '',
    component: DayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DayPage, AddtargetComponent]
})
export class DayPageModule {}
