import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(public http: HttpClient) { }
  getAllContactsLink = "https://jsonplaceholder.typicode.com/users";
  
  getAllContacts(): Observable<any> {
    return this.http.get(this.getAllContactsLink);

  }
  getContactById(id: number): Observable<any> {
    return this.http.get(this.getAllContactsLink + "/" + id);

  }
  addContact(contact: any): Observable<any> {
    return this.http.post(this.getAllContactsLink, contact);
    
  }

}
