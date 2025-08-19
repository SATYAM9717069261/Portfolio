import { JSXElement, onCleanup, onMount } from 'solid-js';

import './foxGame.css';
import './src/sprites.css';

import LargeDialog from '~/shared/components/windows/LargeDialog';
import startGame from './initGame';

function FoxGame(): JSXElement {
  onMount(() => {
    startGame();
    onCleanup(() => {
      // pending Clean
    });
  });

  return (
    <LargeDialog>
      <div class="container">
        <div class="inner">
          <div class="game day"></div>
          <div class="fox hidden"></div>
          <div class="poop-bag hidden"></div>
          <div class="foreground-rain"></div>
          <div class="frame"></div>
          <div class="modal">
            <div class="modal-inner">Press the middle button to start</div>
          </div>
          <div class="buttons">
            <button class="btn left-btn"></button>
            <button class="btn middle-btn"></button>
            <button class="btn right-btn"></button>
          </div>
          <div class="icons">
            <div class="icon highlighted fish-icon"></div>
            <div class="icon poop-icon"></div>
            <div class="icon weather-icon"></div>
          </div>
        </div>
      </div>
    </LargeDialog>
  );
}

export default FoxGame;
