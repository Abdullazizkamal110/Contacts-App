import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  private users: { username: string, password: string }[] = [
    { username: "abdullaziz", password: "00110" },
    { username: "mostafa", password: "00111" },
    { username: "amal", password: "00112" },
    { username: "alshaymaa", password: "00113" }
  ];

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    const validUser = this.users.find(user => user.username === username && user.password === password);

    if (validUser) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
