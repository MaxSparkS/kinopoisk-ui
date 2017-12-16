import { FilmsModule } from './../../../films/films.module';
import { ActorsModule } from './../../../actors/actors.module';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {ButtonModule} from 'primeng/components/button/button';

@NgModule({
    imports: [ButtonModule, ActorsModule, FilmsModule],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule {
}
