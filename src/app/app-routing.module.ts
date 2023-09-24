import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactProfileComponent } from './contact-profile/contact-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DevelopersComponent } from './developers/developers.component';
import { AuthGuard } from './auth-user.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DarkModeComponent } from './dark-mode/dark-mode.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'all-contacts', pathMatch: 'full' },
  { path: 'all-contacts', component: ContactsListComponent, canActivate: [AuthGuard] },
  { path: 'add-contact', component: AddContactComponent, canActivate: [AuthGuard] },
  { path: 'developers', component: DevelopersComponent, canActivate: [AuthGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
  { path: 'profile/:id', component: ContactProfileComponent, canActivate: [AuthGuard] },
  { path: 'dark-mode', component: DarkModeComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
