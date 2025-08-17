import { JSXElement } from 'solid-js';
export interface DialogProps {
  title?: string;
  onClose: () => void;
  children?: JSXElement;
  state: DialogState;
}

export interface DialogContentProps {
  children?: JSXElement;
}

export interface DialogState {
  isOpen: false | true;
}
