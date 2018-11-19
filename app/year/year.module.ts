import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http/';

import { YearPage } from './year.page';


const routes: Routes = [
  {
    path: '',
    component: YearPage
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
  declarations: [YearPage]
})
export class YearPageModule {}
