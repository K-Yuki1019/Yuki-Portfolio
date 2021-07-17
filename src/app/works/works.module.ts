import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksRoutingModule } from './works-routing.module';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { WorksComponent } from './works/works.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CardComponent, CardListComponent, WorksComponent],
  imports: [CommonModule, WorksRoutingModule, MatButtonModule, MatIconModule],
})
export class WorksModule {}
