export interface ModalConfigInterface {}

export interface modalConfigOptions {
  id: String;
  modalSize?: 'sm' | 'lg' | 'xl' | string;
  header?: modalHeader;
  body?: modalBody;
  footer?: modalFooter;
}

export interface modalHeader {
  show?: Boolean;
  title?: String;
  customClass?: String;
  showCloseIcon?: Boolean;
  headerClass?: String;
}

export interface modalBody {
  show?: Boolean;
  content?: String;
  customClass?: String;
  bodyClass?: String;
}

export interface modalFooter {
  show?: Boolean;
  footerClass?: String;
  yesBtn?: modalBtn;
  noBtn?: modalBtn;
}

export interface modalBtn {
  show?: Boolean;
  label?: String;
  customClass?: String;
}
