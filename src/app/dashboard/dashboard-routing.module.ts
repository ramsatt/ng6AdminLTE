import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboradComponent} from './dashborad/dashborad.component';

const routes: Routes = [
    {path: 'Dashboard', component: DashboradComponent}
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
