import { ICONS } from '../utils/constants';

const toggleHighlight = (icon, show) => {
  document.querySelector(`.${ICONS[icon]}-icon`)?.classList.toggle('highlighted', show);
};

export default function initButtons(handleUserAction) {
  let selectedIcon = 0;

  function buttonClick(event) {
    console.log(' Called  => ', event.target);
    if (event.target.classList.contains('left-btn')) {
      // target is actual a button we click
      toggleHighlight(selectedIcon, false);
      selectedIcon = (selectedIcon + 2) % ICONS.length;
      toggleHighlight(selectedIcon, true);
    } else if (event.target.classList.contains('right-btn')) {
      toggleHighlight(selectedIcon, false);
      selectedIcon = (selectedIcon + 1) % ICONS.length;
      toggleHighlight(selectedIcon, true);
    } else {
      // do Something
      handleUserAction(ICONS[selectedIcon]);
      // here this not refer to Game Object and in handle UserAction we use this
    }
  }

  document.querySelector(`.buttons`).addEventListener('click', buttonClick);
}
