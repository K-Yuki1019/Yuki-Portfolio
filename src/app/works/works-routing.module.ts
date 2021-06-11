import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WorksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorksRoutingModule {}
