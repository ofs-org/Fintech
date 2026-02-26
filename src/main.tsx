import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { DataContextProvider } from './context/data-context.tsx'
import { GlobalStyles } from './styles/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </StrictMode>
)
