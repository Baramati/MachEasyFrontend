import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FINMastShopMachineEntryComponent } from './finmast-shop-machine-entry/finmast-shop-machine-entry.component';

const routes: Routes = [
  { path:'FINMastShopMachineEntry',component:FINMastShopMachineEntryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MShopRoutingModule { }
