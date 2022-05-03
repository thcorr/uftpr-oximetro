import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { LandPageComponent } from './land-page/land-page.component';
import { NewmeasurementComponent } from './newmeasurement/newmeasurement.component';

const routes: Routes = [
  {path: 'home', component: LandPageComponent},
  {path: 'newmeasure', component: NewmeasurementComponent},
  {path: 'history/:newlyadded', component: HistoryComponent},
  {path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
