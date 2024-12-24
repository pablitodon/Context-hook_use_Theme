import { useTheme } from './ThemeContext';
import styles from './Context.module.css'

const ContextHome = () => {
  const { isDark, toggleTheme } = useTheme()
  return (
    <div>
      <p className={`${isDark ? styles.dark : styles.white}`}>Text</p>
      <button onClick={() => toggleTheme()}>Click</button>
    </div>
  )
}

export default ContextHome;
