import Header from './containers/header'
import SideNav from './containers/sidenav'
import AppRouter from './router/app-routes'
import { Container } from './styles'

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
