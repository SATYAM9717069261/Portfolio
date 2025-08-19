const gameState = {
  current: 'INIT',
  clock: 1,
  tick() {
    this.clock++;
    console.log(' CLOCK  => ', this.clock);
  }
};

export { gameState as game };
