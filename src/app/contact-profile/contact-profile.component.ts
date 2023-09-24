import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-profile',
  templateUrl: './contact-profile.component.html',
  styleUrls: ['./contact-profile.component.css']
})
export class ContactProfileComponent {
  selectedContact: any;
  contactId: number;
  constructor(_ContactsService: ContactsService, _ActivatedRoute: ActivatedRoute) {
    this.contactId = Number(_ActivatedRoute.snapshot.paramMap.get('id'))
    _ContactsService.getContactById(this.contactId).subscribe(response => this.selectedContact = response)
  }
}
