import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatCardModule,
      MatIconModule,
      MatGridListModule,
      MatProgressSpinnerModule,
      MatListModule],
  exports: [
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatCardModule,
      MatIconModule,
      MatGridListModule,
      MatProgressSpinnerModule,
      MatListModule],
})
export class MaterialComponentsModule { }
