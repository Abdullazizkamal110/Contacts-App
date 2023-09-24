import { Component } from '@angular/core';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent {
  Developers = [
    {
      title: "Abdullaziz Kamal",
      email: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCHrfScrMdqlnGJFzbRPvJMvgdTtQrQJxVrZrZSMbRVQpRpgNRKGXBDdJsRMtcTGtwZtBjGq"
    },
    {
      title: "Mostafa Mohamed",
      email:"https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSGMvftGDdvTCJjhslpTRtFnDzghFWhNJwSJKntDzkWBfFxRMLwmFLbDPmjsDZQDfqxtWVzm"
    },
    {
      title: "Amal Mohamed",
      email:"https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJvqKMKDdWMWfmqccWPwfHlLcQqKBcDpLfgQkvMpWqqZKjbcHlVcmKqJgFHfbnHMRVjTwxV"
    },
    {
      title: "Alshaymaa Ahmed",
      email:"https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJvqKMKDdWMWfmqccWPwfHlLcQqKBcDpLfgQkvMpWqqZKjbcHlVcmKqJgFHfbnHMRVjTwxV"
    }
  ];

}
