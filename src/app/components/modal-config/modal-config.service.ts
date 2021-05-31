import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ModalConfigService {
  private modalTriggerSubject = new Subject<any>();
  public modalTriggerAction = this.modalTriggerSubject.asObservable();

  private modalActionSubject = new Subject<any>();
  public modalAction = this.modalActionSubject.asObservable();
  constructor() {}

  openModal(optionData) {
    console.log('open modal');
    this.modalTriggerSubject.next({ action: 'open', options: optionData });
  }

  closeModal() {}

  modalActionMethod(actionObj) {
    this.modalActionSubject.next(actionObj);
  }
}
