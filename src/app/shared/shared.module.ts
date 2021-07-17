import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [DeleteDialogComponent],
  imports: [CommonModule, MatDialogModule],
})
export class SharedModule {}
