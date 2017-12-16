import { Component, Input } from '@angular/core';
import { Film } from '../../core/models/Film';

@Component({
    selector: 'app-films-list-item',
    templateUrl: 'films-list-item.component.html',
    styleUrls: ['films-list-item.component.scss']
})
export class AppFilmsListItemComponent {
    @Input() public film: Film;
}
