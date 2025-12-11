import './ThemeToggle.css';
import { useTheme } from '../../theme/ThemeContext';

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      <div className={`toggle-slider ${isDarkMode ? 'dark' : 'light'}`}>
        <span className="toggle-icon">
          {isDarkMode ? '🌙' : '☀️'}
        </span>
      </div>
    </button>
  );
}

export default ThemeToggle;