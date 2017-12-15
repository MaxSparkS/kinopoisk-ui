import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule],
  exports: [
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule],
})
export class MaterialComponentsModule { }
