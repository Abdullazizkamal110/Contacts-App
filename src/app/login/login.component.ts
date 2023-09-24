import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  loginMessage: string = "";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    const isLoggedIn = this.authService.login(this.username, this.password);
    if (isLoggedIn) {
      this.loginMessage = "You have logged in successfully.";
      setTimeout(() => {
        this.router.navigate(['/all-contacts']);
      }, 3000);
    } else {
      this.loginMessage = "Invalid username or password. Please try again.";
      setTimeout(() => {
        this.clearError();
      }, 3000);
    }
  }

  clearError() {
    this.loginMessage = "";
  }

  clearFields() {
    this.username = "";
    this.password = "";
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.login();
    }
  }
}
