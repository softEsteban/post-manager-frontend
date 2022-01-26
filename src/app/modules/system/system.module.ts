import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { HomeComponent } from './home/home.component';
import { OptionsComponent } from './options/options.component';


@NgModule({
  declarations: [
    HomeComponent,
    OptionsComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
