import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksRoutingModule } from './works-routing.module';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { WorksComponent } from './works/works.component';

@NgModule({
  declarations: [CardComponent, CardListComponent, WorksComponent],
  imports: [CommonModule, WorksRoutingModule],
})
export class WorksModule {}
