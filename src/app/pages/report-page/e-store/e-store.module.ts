import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EStoreRoutingModule } from './e-store-routing.module';
import { RptToolIssueComponent } from './rpt-tool-issue/rpt-tool-issue.component';
import { RptEStoreToolCribStockComponent } from './rpt-estore-tool-crib-stock/rpt-estore-tool-crib-stock.component';
import { RptDeleteToolRegisterComponent } from './rpt-delete-tool-register/rpt-delete-tool-register.component';
import { RptNonRtrnToolIssueComponent } from './rpt-non-rtrn-tool-issue/rpt-non-rtrn-tool-issue.component';
import { RptItemWiseToolIssueComponent } from './rpt-item-wise-tool-issue/rpt-item-wise-tool-issue.component';
import { RptHCardNoAnnextureComponent } from './rpt-hcard-no-annexture/rpt-hcard-no-annexture.component';
import { RptNonRetToolsStockComponent } from './rpt-non-ret-tools-stock/rpt-non-ret-tools-stock.component';
import { RptGrpToolsIssueSummComponent } from './rpt-grp-tools-issue-summ/rpt-grp-tools-issue-summ.component';
import { RptGrpwiseMonConsmValueComponent } from './rpt-grpwise-mon-consm-value/rpt-grpwise-mon-consm-value.component';


@NgModule({
  declarations: [
  
    RptToolIssueComponent,
       RptEStoreToolCribStockComponent,
       RptDeleteToolRegisterComponent,
       RptNonRtrnToolIssueComponent,
       RptItemWiseToolIssueComponent,
       RptHCardNoAnnextureComponent,
       RptNonRetToolsStockComponent,
       RptGrpToolsIssueSummComponent,
       RptGrpwiseMonConsmValueComponent
  ],
  imports: [
    CommonModule,
    EStoreRoutingModule
  ]
})
export class EStoreModule { }
