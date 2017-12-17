import { CommonModule } from '@angular/common';
import { AuthService } from './../auth/services/auth.service';
import { MaterialComponentsModule } from './material-components.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule
  ],
  providers: [AuthService],
  exports: [NavbarComponent]
})
export class SharedModule { }
