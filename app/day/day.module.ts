import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http/';


import { DayPage } from './day.page';
import { AddtargetComponent } from './addtarget/addtarget.component';
import { EdittargetComponent } from './edittarget/edittarget.component';


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
    HttpClientModule,  
    RouterModule.forChild(routes)
  ],
  declarations: [DayPage, AddtargetComponent, EdittargetComponent]
})
export class DayPageModule {}
