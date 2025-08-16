import useTheme from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button class="p-2 rounded bg-gray-200 dark:bg-gray-700" onClick={toggleTheme}>
      {theme() === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
