import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WIPMastShiftComponent } from './wipmast-shift/wipmast-shift.component';
import { FINMastProcessComponent } from './finmast-process/finmast-process.component';
import { FINMastBreakDownResonComponent } from './finmast-break-down-reson/finmast-break-down-reson.component';
import { FINMastReasonComponent } from './finmast-reason/finmast-reason.component';
import { FINMastCastGradeComponent } from './finmast-cast-grade/finmast-cast-grade.component';
import { FINMastCastSubGradeComponent } from './finmast-cast-sub-grade/finmast-cast-sub-grade.component';
import { FINMastMachineTypeComponent } from './finmast-machine-type/finmast-machine-type.component';
import { FINMastControllerComponent } from './finmast-controller/finmast-controller.component';
import { FINMastOperationComponent } from './finmast-operation/finmast-operation.component';
import { FINMastOperationEntryComponent } from './finmast-operation-entry/finmast-operation-entry.component';
import { FINMastMachinewWiseOprComponent } from './finmast-machinew-wise-opr/finmast-machinew-wise-opr.component';
import { FINMastProdPDIEntryComponent } from './finmast-prod-pdientry/finmast-prod-pdientry.component';
import { FINMastShopComponent } from './finmast-shop/finmast-shop.component';
import { FINMastMatLastOprEntryComponent } from './finmast-mat-last-opr-entry/finmast-mat-last-opr-entry.component';
import { FinMastCodeListComponent } from './fin-mast-code-list/fin-mast-code-list.component';

const routes: Routes = [
  { path:'WIPMastShift',component:WIPMastShiftComponent},
  { path:'FINMastProcess',component:FINMastProcessComponent},
  { path: 'FMShop', loadChildren: () => import('./fmshop/fmshop.module').then(m => m.FMShopModule) },
  { path: 'FINMastBreakDownReson', component: FINMastBreakDownResonComponent },
  { path: 'FINMastReason', component: FINMastReasonComponent },
  { path: 'FINMastCastGrade', component: FINMastCastGradeComponent },
  { path: 'FINMastCastSubGrade', component: FINMastCastSubGradeComponent },
  { path: 'FINMastMachineType', component: FINMastMachineTypeComponent },
  { path: 'FINMastController', component: FINMastControllerComponent },
  { path: 'FINMastOperation', component: FINMastOperationComponent },
  { path: 'FINMastOperationEntry', component: FINMastOperationEntryComponent },
  { path: 'FINMastMachinewWiseOpr', component: FINMastMachinewWiseOprComponent },
  { path: 'FINMastProdPDIEntry', component: FINMastProdPDIEntryComponent },
  { path: 'FINMastShop', component: FINMastShopComponent },
  { path: 'MShop', loadChildren: () => import('./mshop/mshop.module').then(m => m.MShopModule) },
  { path: 'FINMastMatLastOprEntry',component:FINMastMatLastOprEntryComponent},
  { path: 'FinMastCodeList/:id',component:FinMastCodeListComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }
