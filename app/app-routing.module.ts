import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 // { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'day', loadChildren: './day/day.module#DayPageModule' },
  { path: 'year', loadChildren: './year/year.module#YearPageModule' },
  { path: 'stress', loadChildren: './stress/stress.module#StressPageModule' },
  { path: 'communication', loadChildren: './communication/communication.module#CommunicationPageModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
