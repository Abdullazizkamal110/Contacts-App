import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css']
})
export class DarkModeComponent implements OnInit {

  isDarkMode: boolean = false;

  ngOnInit() {
    const storedDarkMode = localStorage.getItem('isDarkMode');
    if (storedDarkMode) {
      this.isDarkMode = JSON.parse(storedDarkMode);
      const body = document.querySelector('body');
      if (body) {
        body.classList.toggle('dark', this.isDarkMode);
      }
    }
  }

  toggleDarkMode() {
    const body = document.querySelector('body');
    if (body) {
      body.classList.toggle('dark');
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem('isDarkMode', JSON.stringify(this.isDarkMode));
    }
  }

}
