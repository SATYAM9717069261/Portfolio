import { Accessor, createSignal, JSXElement } from 'solid-js';
import type { DialogProps, DialogState } from '~/shared/components/types/Dialogs';

export function useDialog() {
  const [dialogDetails, setDialogDetails] = createSignal<DialogProps>({
    title: 'Dialog Title',
    onClose: () =>
      setDialogDetails({
        ...dialogDetails(),
        state: { ...dialogDetails().state, isOpen: false }
      }),
    state: {
      isOpen: true
    },
    children: null
  });

  const openDialog = (body: JSXElement, state: DialogState) => {
    setDialogDetails((prev) => ({ ...prev, children: body, state }));
  };

  const closeDialog = () => {
    console.log(' Trigegr ');
    setDialogDetails((prev) => ({ ...prev, state: { ...prev.state, isOpen: false } }));
  };

  return {
    dialogDetails: dialogDetails as Accessor<DialogProps>,
    openDialog,
    closeDialog
  };
}
