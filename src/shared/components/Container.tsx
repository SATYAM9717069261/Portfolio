import type { JSX, ParentComponent } from 'solid-js';

interface ContainerProps {
  class?: string;
}

const Container: ParentComponent<ContainerProps> = (props): JSX.Element => {
  return (
    <div class={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${props.class || ''}`}>
      {props.children}
    </div>
  );
};

export default Container;
