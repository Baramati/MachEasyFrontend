import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MShopRoutingModule } from './mshop-routing.module';
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
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { GridModule } from 'smart-webcomponents-angular/grid';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WIPCorrectiveActionEntryComponent,
    WIPPreventiveActionEntryComponent,
    WIPMSMthProdPlanEntryComponent,
    WIPMSDailyMShopProdEntryComponent,
    WIPSemiFinishEntryComponent,
    WIPMSDailyMDownEntryComponent,
    WIPLineRejEntryComponent,
    WIPProdRejAnalysisComponent,
    WIPRejectionAnalysisComponent,
    WIPMSDailyMShopProdListComponent,
    WIPMShopDocumentListComponent,
    WIPMSMthProdPlanComponent
  ],
  imports: [
    CommonModule,
    MShopRoutingModule,
    PickerModule,
    BsDatepickerModule,
    GridModule,
    NgSelectModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MShopModule { }
