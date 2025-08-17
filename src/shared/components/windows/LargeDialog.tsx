import { JSXElement } from 'solid-js';
import { PrimaryButton } from '../buttons';

type LargeDialogProps = {
  children?: JSXElement;
};
export default function LargeDialog(props: LargeDialogProps): JSXElement {
  return <div class="max-w-full max-h-full">{props.children}</div>;
}
