import { JSXElement } from 'solid-js';

interface OverlayProps {
  dialogBody: JSXElement | null;
  closeAction: () => void;
}

export default function Overlay(props: OverlayProps): JSXElement {
  console.log(' details => ', props);
  return (
    <div class="bg-black w-full h-full opacity-25 absolute top-0" onClick={props.closeAction}>
      <h1>Working</h1>
    </div>
  );
}
