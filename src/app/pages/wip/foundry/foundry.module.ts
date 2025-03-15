import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoundryRoutingModule } from './foundry-routing.module';
import { WIPFoundryMovementEntryComponent } from './wipfoundry-movement-entry/wipfoundry-movement-entry.component';
import { WIPFoundryMATReconciliationComponent } from './wipfoundry-matreconciliation/wipfoundry-matreconciliation.component';
import { WIPFoundryDocumentListComponent } from './wipfoundry-document-list/wipfoundry-document-list.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { GridModule } from 'smart-webcomponents-angular/grid';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WIPFoundryMovementEntryComponent,
    WIPFoundryMATReconciliationComponent,
    WIPFoundryDocumentListComponent
  ],
  imports: [
    CommonModule,
    PickerModule,
    BsDatepickerModule,
    GridModule,
    NgSelectModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    
  ]
})
export class FoundryModule { }
