import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from './demo-routing.module';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { LightboxModule } from 'ngx-lightbox';
import { SimplebarAngularModule } from 'simplebar-angular';
import { GridModule } from 'smart-webcomponents-angular/grid';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { WidgetModule } from 'src/app/shared/widget/widget.module';
import { DashboardsModule } from '../dashboards/dashboards.module';
import { ModuleNotFoundComponent } from './module-not-found/module-not-found.component';
import { MaterialComponent } from './material/material.component';
import { StockComponent } from './stock/stock.component';
import { ConfirmAlertComponent } from './confirm-alert/confirm-alert.component';



@NgModule({
  declarations: [
    MaterialComponent,
    SmartTableComponent,
    ModuleNotFoundComponent,
    StockComponent,
    ConfirmAlertComponent,
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    NgApexchartsModule,
    ReactiveFormsModule,
    DashboardsModule,
    UIModule,
    WidgetModule,
    FullCalendarModule,
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    CollapseModule.forRoot(),
    AlertModule.forRoot(),
    SimplebarAngularModule,
    LightboxModule,
    PickerModule,
    BsDatepickerModule,
    NgSelectModule,
    GridModule,
    TranslateModule,
  ], providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class DemoModule { }
