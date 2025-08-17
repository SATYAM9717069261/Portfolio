import { JSXElement } from 'solid-js';
import { Buttons } from '../types/Buttons';

export default function PrimaryButton(props: Buttons): JSXElement {
  return <button class="btn-primary ">{props.children}</button>;
}
