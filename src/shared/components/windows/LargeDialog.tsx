import { JSXElement } from 'solid-js';
import { PrimaryButton } from '../buttons';

type LargeDialogProps = {
  children?: JSXElement;
};
export default function LargeDialog(props: LargeDialogProps): JSXElement {
  return (
    <div class="max-w-full max-h-full">
      <div class="flex flex-col items-center justify-center p-8 bg-gradient-to-b from-blue-400 to-green-400 rounded-lg min-h-[400px]">
        {props.children}
      </div>
    </div>
  );
}
