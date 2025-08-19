import {
  DAY_LENGTH,
  getNextDeathTime,
  getNextHungerTime,
  getNextPoopTime,
  NIGHT_LENGTH,
  RAIN_PROBABILITY,
  SCENES
} from './constants';
import { modFox, modScene } from './ui';

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
    console.log(' CLOCK  => ', this.clock, this.wakeTime);
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
    ((this.state = 'SLEEP'), modFox('sleep'));
    modScene('night');
    this.wakeTime = this.clock + NIGHT_LENGTH;
  },

  getHungry() {
    this.current = 'HUNGRY';
    this.deadTime = getNextDeathTime(this.clock);
    this.hungryTime = -1;
    modFox('hungry');
  },

  die() {
    console.log('Die');
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
    console.log(' CHANGE WEATHER ');
    //   this.current = 'WEATHER';
  },

  cleanUpPoop() {
    console.log(' CLEAN UP POOP ');
    //  this.current = 'CLEANING';
  },

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
    modFox('celebrating');
    this.timeToStartCelebrating = -1;
    this.timeToEndCelebrating = this.clock + 2;
  },

  endCelebrating() {
    this.timeToEndCelebrating = -1;
    this.current = 'IDLING';
    this.determineFoxState();
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
