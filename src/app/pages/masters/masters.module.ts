import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastersRoutingModule } from './masters-routing.module';
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
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { GridModule } from 'smart-webcomponents-angular/grid';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WIPMastShiftComponent,
    FINMastProcessComponent,
    FINMastBreakDownResonComponent,
    FINMastReasonComponent,
    FINMastCastGradeComponent,
    FINMastCastSubGradeComponent,
    FINMastMachineTypeComponent,
    FINMastControllerComponent,
    FINMastOperationComponent,
    FINMastOperationEntryComponent,
    FINMastMachinewWiseOprComponent,
    FINMastProdPDIEntryComponent,
    FINMastShopComponent,
    FINMastMatLastOprEntryComponent,
    FinMastCodeListComponent,
  
  ],
  imports: [
    CommonModule,
    MastersRoutingModule,
    PickerModule,
    BsDatepickerModule,
    GridModule,
    NgSelectModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class MastersModule { }
