import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'MShop', loadChildren: () => import('./mshop/mshop.module').then(m => m.MShopModule) },
  { path: 'Foundry', loadChildren: () => import('./foundry/foundry.module').then(m => m.FoundryModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WIPReportPagesRoutingModule { }
