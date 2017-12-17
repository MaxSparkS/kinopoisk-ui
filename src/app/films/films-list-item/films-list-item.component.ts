import { AuthService } from './../../auth/services/auth.service';
import { Component, Input } from '@angular/core';
import { Film } from '../../core/models/Film';

@Component({
    selector: 'app-films-list-item',
    templateUrl: 'films-list-item.component.html',
    styleUrls: ['films-list-item.component.scss']
})
export class AppFilmsListItemComponent {
    constructor(public authService: AuthService) {

    }

    @Input() public film: Film;
}
