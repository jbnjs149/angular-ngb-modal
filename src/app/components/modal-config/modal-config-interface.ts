export interface ModalConfigInterface {

}

export interface modalConfigOptions {
  header?: modalHeader;
  body?: modalBody;
  footer?: modalFooter;
}

export interface modalHeader {
  title: String;
  customClass: String;
  showCloseIcon: Boolean;
  headerClass: String;
}

export interface modalBody {
  show: Boolean;
  content: String;
  customClass: String;
  bodyClass: String;
}

export interface modalFooter {
  show: Boolean;
  footerClass: String;
  yesBtn: modalBtn;
  noBtn: modalBtn;
}

export interface modalBtn {
  show: Boolean;
  label: String;
  customClass: String;
}