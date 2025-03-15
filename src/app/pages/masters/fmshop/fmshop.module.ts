import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FMShopRoutingModule } from './fmshop-routing.module';
import { WIPMastWIPProcessComponent } from './wipmast-wipprocess/wipmast-wipprocess.component';


@NgModule({
  declarations: [
    WIPMastWIPProcessComponent
  ],
  imports: [
    CommonModule,
    FMShopRoutingModule
  ]
})
export class FMShopModule { }
