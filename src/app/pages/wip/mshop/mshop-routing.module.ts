import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WIPCorrectiveActionEntryComponent } from './wipcorrective-action-entry/wipcorrective-action-entry.component';
import { WIPPreventiveActionEntryComponent } from './wippreventive-action-entry/wippreventive-action-entry.component';
import { WIPMSMthProdPlanEntryComponent } from './wipmsmth-prod-plan-entry/wipmsmth-prod-plan-entry.component';
import { WIPMSDailyMShopProdEntryComponent } from './wipmsdaily-mshop-prod-entry/wipmsdaily-mshop-prod-entry.component';
import { WIPSemiFinishEntryComponent } from './wipsemi-finish-entry/wipsemi-finish-entry.component';
import { WIPMSDailyMDownEntryComponent } from './wipmsdaily-mdown-entry/wipmsdaily-mdown-entry.component';
import { WIPLineRejEntryComponent } from './wipline-rej-entry/wipline-rej-entry.component';
import { WIPProdRejAnalysisComponent } from './wipprod-rej-analysis/wipprod-rej-analysis.component';
import { WIPRejectionAnalysisComponent } from './wiprejection-analysis/wiprejection-analysis.component';
import { WIPMSDailyMShopProdListComponent } from './wipmsdaily-mshop-prod-list/wipmsdaily-mshop-prod-list.component';
import { WIPMShopDocumentListComponent } from './wipmshop-document-list/wipmshop-document-list.component';
import { WIPMSMthProdPlanComponent } from './wipmsmth-prod-plan/wipmsmth-prod-plan.component';

const routes: Routes = [
  { path: 'WIPCorrectiveActionEntry', component: WIPCorrectiveActionEntryComponent },
  { path: 'WIPPreventiveActionEntry', component: WIPPreventiveActionEntryComponent },
  { path: 'WIPMSMthProdPlanEntry', component: WIPMSMthProdPlanEntryComponent },
  { path: 'WIPMSDailyMShopProdEntry', component: WIPMSDailyMShopProdEntryComponent },
  { path: 'WIPSemiFinishEntry', component: WIPSemiFinishEntryComponent },
  { path: 'WIPMSDailyMDownEntry', component: WIPMSDailyMDownEntryComponent },
  { path: 'WIPMSDailyMDownEntry', component: WIPMSDailyMDownEntryComponent },
  { path: 'WIPLineRejEntry', component: WIPLineRejEntryComponent },
  { path: 'WIPProdRejAnalysis', component: WIPProdRejAnalysisComponent },
  { path: 'WIPRejectionAnalysis', component: WIPRejectionAnalysisComponent },
  { path: 'WIPMSMthProdPlan', component: WIPMSMthProdPlanComponent },
  { path: 'WIPMShopDocumentList/:id', component: WIPMShopDocumentListComponent },

  //-----new changes
  { path: 'WIPMSDailyMShopProdList', component: WIPMSDailyMShopProdListComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MShopRoutingModule { }
