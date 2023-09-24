import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsService } from './contacts.service';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactProfileComponent } from './contact-profile/contact-profile.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DarkModeComponent } from './dark-mode/dark-mode.component';
import { LogoutComponent } from './logout/logout.component';
import { DevelopersComponent } from './developers/developers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactsListComponent,
    PageNotFoundComponent,
    ContactProfileComponent,
    AddContactComponent,
    LoginComponent,
    DarkModeComponent,
    LogoutComponent,
    DevelopersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
