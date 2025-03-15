import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RptOperatorEfficiencyComponent } from './rpt-operator-efficiency/rpt-operator-efficiency.component';
import { ItemWiseProductionComponent } from './item-wise-production/item-wise-production.component';
import { RptOprwiseStockComponent } from './rpt-oprwise-stock/rpt-oprwise-stock.component';
import { RptExpectedBoringRegOprComponent } from './rpt-expected-boring-reg-opr/rpt-expected-boring-reg-opr.component';
import { RptNCRegisterComponent } from './rpt-ncregister/rpt-ncregister.component';
import { RptWIPMshopLineRejRegComponent } from './rpt-wipmshop-line-rej-reg/rpt-wipmshop-line-rej-reg.component';
import { RptRejectionAnalysisComponent } from './rpt-rejection-analysis/rpt-rejection-analysis.component';
import { RptMonthlyRejAnalysisComponent } from './rpt-monthly-rej-analysis/rpt-monthly-rej-analysis.component';
import { RptWIPMshopRsnwsRejAnalysisComponent } from './rpt-wipmshop-rsnws-rej-analysis/rpt-wipmshop-rsnws-rej-analysis.component';
import { RptRejAnalysisComponent } from './rpt-rej-analysis/rpt-rej-analysis.component';
import { RptProductionReportComponent } from './rpt-production-report/rpt-production-report.component';
import { RptExpectedBoringRegComponent } from './rpt-expected-boring-reg/rpt-expected-boring-reg.component';
import { RptMachineUtilisationComponent } from './rpt-machine-utilisation/rpt-machine-utilisation.component';
import { RptOperatorOEEComponent } from './rpt-operator-oee/rpt-operator-oee.component';
import { RptRejectionRegComponent } from './rpt-rejection-reg/rpt-rejection-reg.component';
import { RptReasonwsAnalysisComponent } from './rpt-reasonws-analysis/rpt-reasonws-analysis.component';
import { RptBreakDownAnalysisComponent } from './rpt-break-down-analysis/rpt-break-down-analysis.component';
import { RptProdPlanStatusComponent } from './rpt-prod-plan-status/rpt-prod-plan-status.component';
import { RptWIPMShopMCTypewsEfficiencyComponent } from './rpt-wipmshop-mctypews-efficiency/rpt-wipmshop-mctypews-efficiency.component';
import { RptOperationWProductionComponent } from './rpt-operation-wproduction/rpt-operation-wproduction.component';
import { RptWIPMshopMCwsEfficiencyComponent } from './rpt-wipmshop-mcws-efficiency/rpt-wipmshop-mcws-efficiency.component';
import { RptWIPMshopDailyMCReportComponent } from './rpt-wipmshop-daily-mcreport/rpt-wipmshop-daily-mcreport.component';
import { RptWIPMshopDailyMCRemarkComponent } from './rpt-wipmshop-daily-mcremark/rpt-wipmshop-daily-mcremark.component';
import { RptMachineWiseProdComponent } from './rpt-machine-wise-prod/rpt-machine-wise-prod.component';
import { RptMachineWiseProductionComponent } from './rpt-machine-wise-production/rpt-machine-wise-production.component';
import { RptBreakDownReasonSummComponent } from './rpt-break-down-reason-summ/rpt-break-down-reason-summ.component';
import { RptMatOprwiseProdComponent } from './rpt-mat-oprwise-prod/rpt-mat-oprwise-prod.component';
import { RptIndOprWEfficiencyComponent } from './rpt-ind-opr-wefficiency/rpt-ind-opr-wefficiency.component';
import { RptShopSelForOEEComponent } from './rpt-shop-sel-for-oee/rpt-shop-sel-for-oee.component';
import { RptShiftwsEfficiencyComponent } from './rpt-shiftws-efficiency/rpt-shiftws-efficiency.component';
import { RptMShopRegisterComponent } from './rpt-mshop-register/rpt-mshop-register.component';
import { RptDailyMachinewsLossComponent } from './rpt-daily-machinews-loss/rpt-daily-machinews-loss.component';
import { RptSatgeTransferToMshopComponent } from './rpt-satge-transfer-to-mshop/rpt-satge-transfer-to-mshop.component';

const routes: Routes = [
  { path:'RptOperatorEfficiency',component:RptOperatorEfficiencyComponent},
  { path:'RptOprwiseStock',component:RptOprwiseStockComponent},
  { path:'ItemWiseProduction',component:ItemWiseProductionComponent},
  { path:'RptExpectedBoringRegOpr',component:RptExpectedBoringRegOprComponent},
  { path:'RptNCRegister',component:RptNCRegisterComponent},
  { path:'RptWIPMshopLineRejReg',component:RptWIPMshopLineRejRegComponent},
  { path:'RptRejectionAnalysis',component:RptRejectionAnalysisComponent},
  { path:'RptMonthlyRejAnalysis',component:RptMonthlyRejAnalysisComponent},
  { path:'RptWIPMshopRsnwsRejAnalysis',component:RptWIPMshopRsnwsRejAnalysisComponent},
  { path:'RptRejAnalysis',component:RptRejAnalysisComponent},
  { path:'RptProductionReport',component:RptProductionReportComponent},
  { path:'RptExpectedBoringReg',component:RptExpectedBoringRegComponent},
  { path:'RptMachineUtilisation',component:RptMachineUtilisationComponent},
  { path:'RptOperatorOEE',component:RptOperatorOEEComponent},
  { path:'RptRejectionReg',component:RptRejectionRegComponent},
  { path:'RptReasonwsAnalysis',component:RptReasonwsAnalysisComponent},
  { path:'RptBreakDownAnalysis',component:RptBreakDownAnalysisComponent},
  { path:'RptProdPlanStatus',component:RptProdPlanStatusComponent},
  { path:'RptWIPMShopMCTypewsEfficiency',component:RptWIPMShopMCTypewsEfficiencyComponent},
  { path:'RptOperationWProduction',component:RptOperationWProductionComponent},
  { path:'RptWIPMshopMCwsEfficiency',component:RptWIPMshopMCwsEfficiencyComponent},
  { path:'RptWIPMshopDailyMCReport',component:RptWIPMshopDailyMCReportComponent},
  { path:'RptWIPMshopDailyMCRemark',component:RptWIPMshopDailyMCRemarkComponent},
  { path:'RptMachineWiseProd',component:RptMachineWiseProdComponent},
  { path:'RptMachineWiseProduction',component:RptMachineWiseProductionComponent},
  { path:'RptBreakDownReasonSumm',component:RptBreakDownReasonSummComponent},
  { path:'RptMatOprwiseProd',component:RptMatOprwiseProdComponent},
  { path:'RptIndOprWEfficiency',component:RptIndOprWEfficiencyComponent},
  { path:'RptShopSelForOEE',component:RptShopSelForOEEComponent},
  { path:'RptShiftwsEfficiency',component:RptShiftwsEfficiencyComponent},
  { path:'RptMShopRegister',component:RptMShopRegisterComponent},
  { path:'RptDailyMachinewsLoss',component:RptDailyMachinewsLossComponent},
  { path:'RptSatgeTransferToMshop',component:RptSatgeTransferToMshopComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MShopRoutingModule { }
