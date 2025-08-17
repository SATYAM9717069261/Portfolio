import type { JSX } from 'solid-js';
import { createSignal, Show } from 'solid-js';
import { Portal } from 'solid-js/web';

import Header from '~/features/profile/components/Header';
import Footer from '~/features/profile/components/Footer';
import ProjectList from '~/features/projects/components/ProjectList';

import Container from '~/shared/components/Container';
import Overlay from '~/shared/components/windows/Overlay';

import { useDialog } from '~/shared/hooks/useDialog';

export default function Home(): JSX.Element {
  const { dialogDetails, openDialog, closeDialog } = useDialog();

  return (
    <div class="flexCol min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <main class="w-full h-full py-8 overflow-y-auto">
        <Container>
          <section class="mb-12">
            <h2 class="text-3xl font-bold mb-6">Featured Projects</h2>
            <ProjectList openDialog={openDialog} />
          </section>
        </Container>
        <Portal>
          <Show when={dialogDetails().state.isOpen}>
            <Overlay dialogBody={dialogDetails().children} closeAction={closeDialog}></Overlay>
          </Show>
        </Portal>
      </main>

      <Footer />
    </div>
  );
}
