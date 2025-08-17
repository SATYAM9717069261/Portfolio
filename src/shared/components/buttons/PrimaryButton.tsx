import { JSXElement } from 'solid-js';
import type { Buttons } from '../types/Buttons';

export default function PrimaryButton(props: Buttons): JSXElement {
  return (
    <button class="btn-primary" onClick={props.action} disabled={props.disabled}>
      {props.children}
    </button>
  );
}
