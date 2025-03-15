import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobWorkRoutingModule } from './job-work-routing.module';
import { JOBDocumentListComponent } from './jobdocument-list/jobdocument-list.component';


@NgModule({
  declarations: [
    JOBDocumentListComponent
  ],
  imports: [
    CommonModule,
    JobWorkRoutingModule
  ]
})
export class JobWorkModule { }
