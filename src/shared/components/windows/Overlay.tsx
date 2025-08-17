import { JSXElement } from 'solid-js';
import { PrimaryButton } from '../buttons';

interface OverlayProps {
  dialogBody: JSXElement | null;
  closeAction: () => void;
}

type OverlayHeaderProps = {
  closeAction: () => void;
};

export default function Overlay(props: OverlayProps): JSXElement {
  console.log(' dialog => ', props.dialogBody);
  return (
    <div
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={props.closeAction}
    >
      {/* Dialog box */}
      <div class="bg-white rounded-2xl shadow-xl p-4" onClick={(e) => e.stopPropagation()}>
        <Header closeAction={props.closeAction} />
        <div class="mt-4">{props.dialogBody}</div>
      </div>
    </div>
  );
}

function Header(props: OverlayHeaderProps): JSXElement {
  return (
    <div class="flex justify-between items-center border-b pb-3 ">
      <PrimaryButton action={props.closeAction}>✕</PrimaryButton>
    </div>
  );
}
