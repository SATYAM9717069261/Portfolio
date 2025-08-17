import { JSXElement } from 'solid-js';

export interface Buttons {
  action: () => void;
  style?: '' | string;
  disabled?: false | true;
  children?: null | JSXElement;
}
