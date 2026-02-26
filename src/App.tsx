import Header from './components/header'
import SideNav from './components/sidenav'
import Summary from './pages/summary'
import { Container } from './styles'

function App() {
  return (
    <>
      <Container>
        <SideNav />
        <main>
          <Header />
          <Summary />
        </main>
      </Container>
    </>
  )
}

export { App }
