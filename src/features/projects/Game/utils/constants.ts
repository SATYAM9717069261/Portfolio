export const REFRESH_RATE = 1000; // Rate of game ticks in milliseconds
export const RAIN_PROBABILITY = 0.5; // Probability of rain on a given day

export const FOX_STATE = [
  'INIT',
  'HATCHING',
  'IDLING',
  'SLEEPING',
  'EATING',
  'POOPING',
  'HUNGRY',
  'CELEBRATING',
  'DEAD'
];

export const ICONS = ['fish', 'poop', 'weather'];

export const SCENES = ['day', 'rain'];

export const DAY_LENGTH = 60;
export const NIGHT_LENGTH = 8;

export const getNextHungerTime = (clock) => Math.floor(Math.random() * 3) + 5 + clock;
export const getNextDeathTime = (clock) => Math.floor(Math.random() * 2) + 3 + clock;
export const getNextPoopTime = (clock) => Math.floor(Math.random() * 3) + 4 + clock;
