import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MShopRoutingModule } from './mshop-routing.module';
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


@NgModule({
  declarations: [
    RptOperatorEfficiencyComponent,
    ItemWiseProductionComponent,
    RptOprwiseStockComponent,
    RptExpectedBoringRegOprComponent,
    RptNCRegisterComponent,
    RptWIPMshopLineRejRegComponent,
    RptRejectionAnalysisComponent,
    RptMonthlyRejAnalysisComponent,
    RptWIPMshopRsnwsRejAnalysisComponent,
    RptRejAnalysisComponent,
    RptProductionReportComponent,
    RptExpectedBoringRegComponent,
    RptMachineUtilisationComponent,
    RptOperatorOEEComponent,
    RptRejectionRegComponent,
    RptReasonwsAnalysisComponent,
    RptBreakDownAnalysisComponent,
    RptProdPlanStatusComponent,
    RptWIPMShopMCTypewsEfficiencyComponent,
    RptOperationWProductionComponent,
    RptWIPMshopMCwsEfficiencyComponent,
    RptWIPMshopDailyMCReportComponent,
    RptWIPMshopDailyMCRemarkComponent,
    RptMachineWiseProdComponent,
    RptMachineWiseProductionComponent,
    RptBreakDownReasonSummComponent,
    RptMatOprwiseProdComponent,
    RptIndOprWEfficiencyComponent,
    RptShopSelForOEEComponent,
    RptShiftwsEfficiencyComponent,
    RptMShopRegisterComponent,
    RptDailyMachinewsLossComponent,
    RptSatgeTransferToMshopComponent
  ],
  imports: [
    CommonModule,
    MShopRoutingModule
  ]
})
export class MShopModule { }
