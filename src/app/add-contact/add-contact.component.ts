import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  isSubmitted: boolean = false
  registerForm = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.email, Validators.required]),
  });

  constructor(public _ContactsService: ContactsService, private router: Router) {
  }

  ngOnInit(): void {

  }
  save() {
    console.log(this.registerForm.value);
    this._ContactsService.addContact(this.registerForm.value).subscribe(_response => {
      this.isSubmitted = true;
      this.registerForm.reset();

      const successMessage = document.createElement('div');
      successMessage.className = 'success-message';
      successMessage.innerHTML = `
      <div style="background-color: white; border-radius: 25px;">
      <div style="color: black;">
        Contact added successfully! Would you like to stay on this page?
      </div>
      <ul class="nav col-auto mb-2 mb-md-0">
      <li><a class="btn btn-pink" style="border-radius: 25px;" id="confirmButton">OK</a></li>
      <li><a class="btn btn-pink" style="border-radius: 25px;" id="cancelButton">Cancel</a></li>
      </ul>
      </div>
      `;

      const confirmButton = successMessage.querySelector('#confirmButton');
      const cancelButton = successMessage.querySelector('#cancelButton');

      if (cancelButton) {
        cancelButton.addEventListener('click', () => {
          this.router.navigate(['/all-contacts']);
          successMessage.remove();
        });
      }

      if (confirmButton) {
        confirmButton.addEventListener('click', () => {
          successMessage.remove();
        });
      }

      document.body.insertBefore(successMessage, document.body.firstChild);
    });
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.save();
    }
  }
}
