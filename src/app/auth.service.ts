import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: { username: string, password: string }[] = [
    { username: "abdullaziz", password: "00110" },
    { username: "mostafa", password: "00111" },
    { username: "amal", password: "00112" },
    { username: "alshaymaa", password: "00113" }
  ];

  constructor() { }

  login(username: string, password: string) {
    const user = this.users.find(u => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem("username", user.username);
      localStorage.setItem("password", user.password);
      return true;
    } else {
      return false;
    }
  }

logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("password");
}

isLoggedIn() {
  return !!localStorage.getItem("username") && !!localStorage.getItem("password");
}
}
