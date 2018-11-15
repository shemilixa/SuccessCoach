import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'day', loadChildren: './day/day.module#DayPageModule' },
  { path: 'year', loadChildren: './year/year.module#YearPageModule' },
  { path: 'stress', loadChildren: './stress/stress.module#StressPageModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
