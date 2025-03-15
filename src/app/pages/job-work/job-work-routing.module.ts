import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JOBDocumentListComponent } from './jobdocument-list/jobdocument-list.component';

const routes: Routes = [
  {path:"JOBDocumentList",component:JOBDocumentListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobWorkRoutingModule { }
