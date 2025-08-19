import initButtons from './src/buttons';
import { REFRESH_RATE } from './utils/constants';
import { game, handleUserAction } from './utils/stateManage';

export default async function startGame() {
  console.log('Starting game...');
  initButtons(handleUserAction);
  let nextTick = Date.now();

  function nextFrame() {
    const now = Date.now();

    // should i update game state , if not it  schedule for next tick
    if (nextTick <= now) {
      game.tick();
      nextTick = now + REFRESH_RATE; // when next Update happen here i use FRAME_RATE
    }

    requestAnimationFrame(nextFrame);
  }

  /**
   * setTimeout or setInterval  block Browser, In Interval if something important come to Browser it's didn't Starting
   * but with requestAnimationFrame its stop and do important work then if cpu ideal then start again
   */
  requestAnimationFrame(nextFrame);
}
