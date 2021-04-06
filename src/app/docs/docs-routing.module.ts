import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsComponent } from './docs.component';
import { DocComponent } from './doc/doc.component';

// TODO: may want to clean up the doc vs. docs component.
const routes: Routes = [
  { path: '', component: DocsComponent },
  { path: ':slug', component: DocComponent },
  { path: '**', component: DocComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsRoutingModule {}
