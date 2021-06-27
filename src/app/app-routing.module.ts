import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
{
  path: 'home', loadChildren: () => import('./eduction/eduction-pages/eduction-pages.module').then(
    m => m.EductionPagesModule
  )
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
