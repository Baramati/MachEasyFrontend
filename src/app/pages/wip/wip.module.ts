import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WIPRoutingModule } from './wip-routing.module';
import { GridModule } from 'smart-webcomponents-angular/grid';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WIPRoutingModule,
    PickerModule,
    BsDatepickerModule,
    GridModule,
    NgSelectModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ]
  
})
export class WIPModule {
  
 }
