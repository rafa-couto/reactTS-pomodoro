import { HeaderContainer } from './styles'
import Logo from '../../assets/Logo.svg'
import { Moon, Scroll, Sun, Timer } from 'phosphor-react'
import { useThemePreference } from '../../styles/themes/context'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { theme, toggleTheme } = useThemePreference()
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <nav aria-label="Main navigation">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Dark theme"
          aria-pressed={theme === 'dark'}
          title={
            theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
          }
        >
          {theme === 'dark' ? (
            <Moon size={24} aria-hidden="true" />
          ) : (
            <Sun size={24} aria-hidden="true" />
          )}
        </button>
        <NavLink to="/" title="Timer" aria-label="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History" aria-label="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
