import { createSignal, onMount } from 'solid-js';
import { Theme } from '../../app/theme';

export default function useTheme() {
  const [theme, setTheme] = createSignal<Theme>(
    (localStorage.getItem('theme') as Theme) || Theme.LIGHT
  );

  onMount(() => {
    document.documentElement.classList.add(theme());
  });

  const toggleTheme = () => {
    const newTheme = theme() === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    document.documentElement.classList.remove(theme());
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return { theme, toggleTheme };
}
