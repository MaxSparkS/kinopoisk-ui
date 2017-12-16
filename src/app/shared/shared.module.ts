import { MaterialComponentsModule } from './material-components.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    MaterialComponentsModule
  ],
  providers: [],
  exports: [NavbarComponent]
})
export class SharedModule { }
