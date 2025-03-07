import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { ModuleNotFoundComponent } from './module-not-found/module-not-found.component';

const routes: Routes = [
  { path: 'smart-table', component: SmartTableComponent },
  { path: 'moduleNotFound', component: ModuleNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
