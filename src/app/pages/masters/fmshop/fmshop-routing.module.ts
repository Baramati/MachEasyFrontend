import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WIPMastWIPProcessComponent } from './wipmast-wipprocess/wipmast-wipprocess.component';

const routes: Routes = [
  { path: 'WIPMastWIPProcess', component:WIPMastWIPProcessComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FMShopRoutingModule { }
