import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EductionPagesComponent } from './containers/eduction-pages/eduction-pages.component';

const routes: Routes = [
  { path: '', component: EductionPagesComponent },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EductionPagesRoutingModule { }
