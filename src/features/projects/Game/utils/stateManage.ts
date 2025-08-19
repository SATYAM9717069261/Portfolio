import {
  DAY_LENGTH,
  getNextDeathTime,
  getNextHungerTime,
  getNextPoopTime,
  NIGHT_LENGTH,
  RAIN_PROBABILITY,
  SCENES
} from './constants';
import { modFox, modScene, togglePoopBag, writeModal } from './ui';

const gameState = {
  current: 'INIT',
  clock: 1,
  wakeTime: -1,
  sleepTime: -1,
  hungryTime: -1,
  deadTime: -1,
  poopTime: -1,
  timeToStartCelebrating: -1,
  timeToEndCelebrating: -1,

  tick() {
    this.clock++;
    console.log(' CLOCK  => ', this.clock);
    if (this.clock === this.wakeTime) {
      this.wake();
    } else if (this.clock === this.sleepTime) {
      this.sleep();
    } else if (this.clock === this.hungryTime) {
      this.getHungry();
    } else if (this.clock === this.deadTime) {
      this.die();
    } else if (this.clock == this.timeToStartCelebrating) {
      this.startCelebrating();
    } else if (this.clock == this.timeToEndCelebrating) {
      this.endCelebrating();
    } else if (this.clock == this.poopTime) {
      this.poop();
    }

    return this.clock;
  },

  startGame() {
    console.log(' GAME START');
    this.current = 'HATCHING';
    this.wakeTime = this.clock + 3; // ake up time after 3
    modFox('egg');
    modScene('day');
  },

  wake() {
    console.log(' WAKE ');
    this.current = 'IDLIGN';
    this.wakeTime = -1;
    modFox('idling');
    this.scene = Math.random() > RAIN_PROBABILITY ? 0 : 1;
    modScene(SCENES[this.scene]);
    this.sleepTime = this.clock + DAY_LENGTH;
    this.hungryTime = getNextHungerTime(this.clock);
    this.determineFoxState();
  },

  sleep() {
    this.state = 'SLEEP';
    modFox('sleep');
    modScene('night');
    this.clearTime();
    this.wakeTime = this.clock + NIGHT_LENGTH;
  },
  clearTime() {
    this.wakeTime = -1;
    this.sleepTime = -1;
    this.hungryTime = -1;
    this.deadTime = -1;
    this.poopTime = -1;
    this.timeToStartCelebrating = -1;
    this.timeToEndCelebrating = -1;
  },

  getHungry() {
    this.current = 'HUNGRY';
    this.deadTime = getNextDeathTime(this.clock);
    this.hungryTime = -1;
    modFox('hungry');
  },

  poop() {
    this.current = 'POOPING';
    this.poopTime = -1;
    this.dieTime = getNextDeathTime(this.clock);
    modFox('pooping');
  },

  die() {
    console.log('Die');
    this.current = 'DEAD';
    modScene('dead');
    modFox('dead');
    this.clearTime();
    writeModal('FOX DEAD : (PRESS MIDDLE BUTTON)');
  },

  handleUserAction(icon) {
    if (['POOPING', 'SLEEP', 'FEEDING', 'CELEBRATING', 'HATCHING'].includes(this.current)) {
      return;
    }
    if (this.current === 'INIT' || this.current === 'DEAD') {
      this.startGame();
      return;
    }

    switch (icon) {
      case 'weather':
        this.changeWeather();
        break;
      case 'poop':
        this.cleanUpPoop();
        break;
      case 'fish':
        this.feed();
        break;
    }

    console.log(icon);
  },

  changeWeather() {
    this.scene = (this.scene + 1) % SCENES.length;
    modScene(SCENES[this.scene]);
    this.determineFoxState();
    this.current = 'WEATHER';
  },

  cleanUpPoop() {
    console.log(' CLEAN UP POOP ');
    if (!this.current == 'POOPING') {
      return;
    } else {
      this.deadTime = -1;
      togglePoopBag(true);
      this.startCelebrating();
      this.hungryTime = getNextHungerTime(this.clock);
    }
  },

  dead() {},

  feed() {
    console.log(' FEED ');
    if (this.current === 'HUNGRY') {
      this.current = 'FEEDING';
      this.deadTime = -1;
      this.poopTime = getNextPoopTime(this.clock);
      modFox('eating');
      this.timeToStartCelebrating = this.clock + 2;
    } else {
      return;
    }
  },

  startCelebrating() {
    this.current = 'CELEBRATING';
    modFox('celebrate');
    this.timeToStartCelebrating = -1;
    this.timeToEndCelebrating = this.clock + 5;
  },

  endCelebrating() {
    this.timeToEndCelebrating = -1;
    this.current = 'IDLING';
    this.determineFoxState();
    togglePoopBag(false);
  },

  determineFoxState() {
    if (this.current == 'IDLING') {
      if (SCENES[this.scene] == 'rain') {
        modFox('rain');
      } else {
        modFox('idling');
      }
    }
  }
};

export const handleUserAction = gameState.handleUserAction.bind(gameState);
export { gameState as game };
