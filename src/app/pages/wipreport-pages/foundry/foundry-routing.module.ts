import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RptAllStageDetailStkComponent } from './rpt-all-stage-detail-stk/rpt-all-stage-detail-stk.component';
import { RptWIPStkDetailsComponent } from './rpt-wipstk-details/rpt-wipstk-details.component';

const routes: Routes = [
  {path:'RptAllStageDetailStk',component:RptAllStageDetailStkComponent},
  {path:'RptWIPStkDetails',component:RptWIPStkDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoundryRoutingModule { }
