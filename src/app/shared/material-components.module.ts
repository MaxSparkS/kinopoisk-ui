import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatCardModule,
      MatIconModule,
      MatGridListModule],
  exports: [
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatCardModule,
      MatIconModule,
      MatGridListModule],
})
export class MaterialComponentsModule { }
