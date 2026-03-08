import { BrowserRouter } from 'react-router-dom'
import Header from './containers/header'
import SideNav from './containers/sidenav'
import { Container } from './styles'
import AppRouter from './router/app-routes'

function App() {
  return (
    <Container>
      <SideNav />
      <main>
        <Header />
        <AppRouter />
      </main>
    </Container>
  )
}

export { App }
