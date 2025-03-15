import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MShopRoutingModule } from './mshop-routing.module';
import { FINMastShopMachineEntryComponent } from './finmast-shop-machine-entry/finmast-shop-machine-entry.component';


@NgModule({
  declarations: [
    FINMastShopMachineEntryComponent
  ],
  imports: [
    CommonModule,
    MShopRoutingModule
  ]
})
export class MShopModule { }
