import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Submodule1Component } from './submodule1.compoment';
import { SubmoduleComponent } from './submodule.compoment';
import { HomeRoutingModule } from './home.routing';

@NgModule({
  declarations: [
    Submodule1Component,
    SubmoduleComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule
  ],
  exports: [
  ],
  providers: []
})
export class HomeModule { }
