import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WIPFoundryMovementEntryComponent } from './wipfoundry-movement-entry/wipfoundry-movement-entry.component';
import { WIPFoundryMATReconciliationComponent } from './wipfoundry-matreconciliation/wipfoundry-matreconciliation.component';
import { WIPFoundryDocumentListComponent } from './wipfoundry-document-list/wipfoundry-document-list.component';

const routes: Routes = [
  { path:'WIPFoundryMovementEntry',component:WIPFoundryMovementEntryComponent},
  { path:'WIPFoundryMATReconciliation',component:WIPFoundryMATReconciliationComponent},
  { path:'WIPFoundryDocumentList/:id',component:WIPFoundryDocumentListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoundryRoutingModule { }
