export const modFox = function modFox(state: string) {
  const dom = document.querySelector('.fox');
  if (dom) {
    dom.className = 'fox fox-' + state;
  }
};

export const modScene = function modScene(state: string) {
  const dom = document.querySelector('.game');
  if (dom) {
    dom.className = `game ${state}`;
  }
};

export const togglePoopBag = function togglePoopBag(show: boolean) {
  const dom = document.querySelector('.poop-bag');
  if (dom) {
    dom.classList.toggle('hidden', show);
  }
};

export const writeModal = function writeModal(text = '') {
  let htmlSelector = document.querySelector('.modal')?.textContent ?? null;
  if (htmlSelector) {
    htmlSelector = `<div class='modal-inner'>${text}</div>`;
  }
};
