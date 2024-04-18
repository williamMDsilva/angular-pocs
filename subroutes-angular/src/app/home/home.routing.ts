import { NgModule }            from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmoduleComponent } from './submodule.compoment';
import { Submodule1Component } from './submodule1.compoment';


const routes: Routes = [
  { path: 'page1', component: SubmoduleComponent },
  { path: 'page2', component: Submodule1Component },
  { path: '', redirectTo: 'page1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
