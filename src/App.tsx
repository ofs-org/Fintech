import Header from './containers/header'
import SideNav from './containers/sidenav'
import Sales from './pages/Sales'
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
          <Sales />
        </main>
      </Container>
    </>
  )
}

export { App }
