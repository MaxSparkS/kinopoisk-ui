import { AuthService } from './../../auth/services/auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss']
})
export class NavbarComponent {
    constructor(private router: Router, public authService: AuthService) {

    }

    login() {
        this.router.navigate(['/login']);
    }

    logout() {
        this.authService.logOut();
        this.router.navigate(['/home']);
    }
    register() {
      this.router.navigate(['/register']);
    }
}
