import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent {
  constructor(private authService: AuthService, private router: Router) { }
  logout() {
    this.authService.logout();
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Successfully logged out';
    document.body.insertBefore(successMessage, document.body.firstChild);

    setTimeout(() => {
      document.body.removeChild(successMessage);
      this.router.navigate(['/login']);
    }, 3000);
  }

}
