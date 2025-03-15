import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoundryRoutingModule } from './foundry-routing.module';
import { RptAllStageDetailStkComponent } from './rpt-all-stage-detail-stk/rpt-all-stage-detail-stk.component';
import { RptWIPStkDetailsComponent } from './rpt-wipstk-details/rpt-wipstk-details.component';


@NgModule({
  declarations: [
    RptAllStageDetailStkComponent,
    RptWIPStkDetailsComponent
  ],
  imports: [
    CommonModule,
    FoundryRoutingModule
  ]
})
export class FoundryModule { }
