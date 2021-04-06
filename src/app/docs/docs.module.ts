import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';
import { DocComponent } from './doc/doc.component';


@NgModule({
  declarations: [DocsComponent, DocComponent],
  imports: [
    CommonModule,
    DocsRoutingModule,
    ScullyLibModule
  ]
})
export class DocsModule { }
