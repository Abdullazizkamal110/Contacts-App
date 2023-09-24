import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent {

  contactsArr: { id: number, name: string, email: string, favorite: boolean, starred: boolean, selected: boolean }[] = [];

  constructor(_ContactsService: ContactsService) {
    
    _ContactsService.getAllContacts().subscribe(response => {
      this.contactsArr = response;

      const storedContacts = localStorage.getItem('contactsArr');
      if (storedContacts) {
        this.contactsArr = JSON.parse(storedContacts);
      }
    });
  }

  toggleStar(contact: { id: number, name: string, email: string, favorite: boolean, starred: boolean }) {
    contact.starred = !contact.starred;
    localStorage.setItem('contactsArr', JSON.stringify(this.contactsArr));
  }

  deleteContact(contactId: number) {
    const confirmation = confirm('Are you sure you want to delete this connection?');

    if (confirmation) {
      this.contactsArr = this.contactsArr.filter(contact => contact.id !== contactId);
    }
  }

  searchTerm: string = '';

  get filteredContacts() {
    return this.contactsArr.filter(contact =>
      contact.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  ngOnInit(): void {

  }
}
