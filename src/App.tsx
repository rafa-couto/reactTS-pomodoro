import { AppThemeProvider } from './styles/themes/preference'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/themes/global'

export function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </AppThemeProvider>
  )
}
