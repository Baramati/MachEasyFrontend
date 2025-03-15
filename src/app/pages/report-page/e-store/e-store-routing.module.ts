import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RptToolIssueComponent } from './rpt-tool-issue/rpt-tool-issue.component';
import { RptEStoreToolCribStockComponent } from './rpt-estore-tool-crib-stock/rpt-estore-tool-crib-stock.component';
import { RptDeleteToolRegisterComponent } from './rpt-delete-tool-register/rpt-delete-tool-register.component';
import { RptNonRtrnToolIssueComponent } from './rpt-non-rtrn-tool-issue/rpt-non-rtrn-tool-issue.component';
import { RptItemWiseToolIssueComponent } from './rpt-item-wise-tool-issue/rpt-item-wise-tool-issue.component';
import { RptHCardNoAnnextureComponent } from './rpt-hcard-no-annexture/rpt-hcard-no-annexture.component';
import { RptNonRetToolsStockComponent } from './rpt-non-ret-tools-stock/rpt-non-ret-tools-stock.component';
import { RptGrpToolsIssueSummComponent } from './rpt-grp-tools-issue-summ/rpt-grp-tools-issue-summ.component';
import { RptGrpwiseMonConsmValueComponent } from './rpt-grpwise-mon-consm-value/rpt-grpwise-mon-consm-value.component';

const routes: Routes = [
  { path: 'RptToolIssue', component:RptToolIssueComponent},
  { path: 'RptEStoreToolCribStock', component:RptEStoreToolCribStockComponent},
  { path: 'RptDeleteToolRegister', component:RptDeleteToolRegisterComponent},
  { path: 'RptNonRtrnToolIssue', component:RptNonRtrnToolIssueComponent},
  { path: 'RptItemWiseToolIssue', component:RptItemWiseToolIssueComponent},
  { path: 'RptHCardNoAnnexture', component:RptHCardNoAnnextureComponent},
  { path: 'RptNonRetToolsStock', component:RptNonRetToolsStockComponent},
  { path: 'RptGrpToolsIssueSumm', component:RptGrpToolsIssueSummComponent},
  { path: 'RptGrpwiseMonConsmValue', component:RptGrpwiseMonConsmValueComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EStoreRoutingModule { }
