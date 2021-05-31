import { Component, OnInit } from '@angular/core';
import { ModalConfigService } from '../modal-config/modal-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public filterSubscription;
  constructor(public modalService: ModalConfigService) {}

  ngOnInit() {
    this.initTriggerOption();
  }

  initTriggerOption() {
    console.log('initTriggerOption home');
    this.filterSubscription = this.modalService.modalAction.subscribe(data => {
      console.log('response', data);
      if (data && data.action === 'yes') {
        this.modalAction();
      }
    });
  }

  openConfimModal() {
    const options = {}; // add all modal option here. like size, button labels etc
    this.modalService.openModal(options);
  }
  modalAction() {
    console.log('Yes Clicked');
  }
}
