import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { modalConfigOptions } from './modal-config-interface';
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

  public modalOptions: modalConfigOptions;

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
          this.open(data);
        }
      }
    );
  }

  open(modalData) {
    this.resetModalOptions();
    if (modalData.options) {
      this.setModalOptions(modalData.options);
    }

    this.modalService.open(this.modalContent);
  }

  modalYesAction(modalObj) {
    const obj = {
      action: 'yes',
      data: {}
    };
    this.customModalService.modalActionMethod(obj);
    if (modalObj) {
      modalObj.close('Ok click');
    }
  }

  modalNoAction(modalObj) {
    const obj = {
      action: 'no',
      data: {}
    };
    this.customModalService.modalActionMethod(obj);
    if (modalObj) {
      modalObj.close('Ok click');
    }
  }

  resetModalOptions() {
    try {
      this.modalOptions = {
        header: {
          title: 'Confim Modal Header',
          customClass: '',
          showCloseIcon: true,
          headerClass: ''
        },
        body: {
          show: true,
          content: '<p>Do you want to confirm?</p>',
          customClass: '',
          bodyClass: ''
        },
        footer: {
          show: true,
          footerClass: '',
          yesBtn: {
            show: true,
            label: 'Yes',
            customClass: 'btn btn-danger'
          },
          noBtn: {
            show: true,
            label: 'No',
            customClass: 'btn btn-outline-secondary'
          }
        }
      };
    } catch (error) {
      console.log(error);
    }
  }

  setModalOptions(modalOptions) {
    try {
      this.modalOptions = Object.assign({ ...this.modalOptions }, modalOptions);
      console.log('this.modalOptions', this.modalOptions);
    } catch (error) {
      console.log(error);
    }
  }
}
