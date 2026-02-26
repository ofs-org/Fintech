import Header from './components/header'
import SideNav from './components/sidenav'
import Summary from './pages/summary'

function App() {
  return (
    <>
      <SideNav />
      <main>
        <Header />
        <Summary />
      </main>
    </>
  )
}

export { App }
