import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './dashboards/default/default.component';

const routes: Routes = [
  // { path: '', redirectTo: 'dashboard' },
  {
    path: "",
    component: DefaultComponent
  },
  { path: 'dashboard', component: DefaultComponent },
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
  { path: 'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) },
  { path: 'report_pages', loadChildren: () => import('./report-page/report-page.module').then(m => m.ReportPageModule) },
  { path: 'WIP', loadChildren: () => import('./wip/wip.module').then(m => m.WIPModule) },
  { path: 'WIPReportPages', loadChildren: () => import('./wipreport-pages/wipreport-pages.module').then(m => m.WIPReportPagesModule) },
  { path: 'Masters', loadChildren: () => import('./masters/masters.module').then(m => m.MastersModule) },
 //Ankita
  { path: 'JobWork', loadChildren: () => import('./job-work/job-work.module').then(m => m.JobWorkModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
