import { Component, OnInit } from '@angular/core';
import { modalConfigOptions } from '../modal-config/modal-config-interface';
import { ModalConfigService } from '../modal-config/modal-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public modalSubscription;
  constructor(public modalService: ModalConfigService) {}

  ngOnInit() {
    this.initTriggerOption();
  }

  initTriggerOption() {
    console.log('initTriggerOption home');
    this.modalSubscription = this.modalService.modalAction.subscribe(data => {
      console.log('response', data);
      if (data && data.action === 'yes') {
        this.modalAction();
      }
    });
  }

  openConfimModal() {
    const name = 'Ashna';
    const options: modalConfigOptions = {
      id: 'homeInfoUniqueId',
      modalSize: 'xl',
      header: {
        show: true,
        title: 'Info',
        customClass: '',
        showCloseIcon: true,
        headerClass: ''
      },
      body: {
        show: true,
        content: `<div class="ds-text-align-justify">Dear Sir / Madam ${name},<br><br>
            <p>I am aware that I may avail of
                free Company provided transport with Security facilities for
                travel between my workplace and residence, if I am required to
                work from office or from IBM's Client premises between 7.00 PM and
                7.00 AM (For All locations - 7:00 PM to 7:00 AM, NCR only during
                winter [Oct-Feb] - 6:00 PM to 8:00 AM)for any reasons whatsoever.
                I may avail this facility provided by IBM India during night window
                at any point of time, by suitably notifying the Transport Operations
                team of IBM India<br /><br />However, for any personal reasons, if
                I am voluntarily making my own transport arrangements for commuting
                To & fro from my workplace on any particular day, then I understand and
                acknowledge that I will be personally responsible for my own
                safety, security and any other consequences thereof. I also
                understand and acknowledge that in such a scenario IBM India will
                have no liability whatsoever arising out of my action and I waive
                any claims that I may have against IBM India in this respect. I
                shall notify my manager and the designated Transport Coordinator
                in advance if I am making my own transport arrangements and
                choosing not to avail company transport for that particular trip
                or day, and shall provide reasons for opting out. I understand
                that failure to do so may attract disciplinary action.</p>
            <br><br>Thanking you<br>Yours sincerely,
        </div>`,
        customClass: '',
        bodyClass: ''
      },
      footer: {
        show: false
      }
    }; // add all modal option here. like size, button labels etc
    this.modalService.openModal(options);
  }
  modalAction() {
    console.log('Yes Clicked');
  }
}
