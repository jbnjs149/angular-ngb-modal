import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfigService } from './modal-config.service';

@Component({
  selector: 'modal-config',
  templateUrl: './modal-config.html',
  // add NgbModalConfig and NgbModal to the component providers
  providers: [NgbModalConfig, NgbModal]
})
export class ModalConfig implements OnInit {
  @ViewChild('modalContent') modalContent;
  public modalTriggerSubscription;

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    public customModalService: ModalConfigService
  ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.initTriggerOption();
  }

  initTriggerOption() {
    console.log('initTriggerOption modal -------');
    this.modalTriggerSubscription = this.customModalService.modalTriggerAction.subscribe(
      data => {
        console.log('trigger', data);
        if (data && data.action === 'open') {
          this.open();
        }
      }
    );
  }

  open() {
    this.modalService.open(this.modalContent);
  }

  modalYesAction(modalObj) {
    const obj = {
      action: 'yes',
      data: {}
    };
    this.customModalService.modalActionMethod(obj);
    if(modalObj) {
      modalObj.close('Ok click');
    }
  }

  modalNoAction(modalObj) {
    const obj = {
      action: 'no',
      data: {}
    };
    this.customModalService.modalActionMethod(obj);
    if(modalObj) {
      modalObj.close('Ok click');
    }
  }
}
