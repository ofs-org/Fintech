import React from 'react'
import { useLocation } from 'react-router-dom'
import DateRange from '../date-range'
import MouthsBtn from '../mouths-btn'
import { ContainerHeader, DateRangeStyles } from './styles'

const Header = () => {
  const [title, setTitle] = React.useState('')
  const location = useLocation()

  React.useEffect(() => {
    if (location.pathname === '/') {
      document.title = 'FinTech OFS | Resumo '
      setTitle('Resumo')
    } else if (location.pathname === '/sales') {
      document.title = 'FinTech OFS | Vendas'
      setTitle('Vendas')
    }
  }, [location])

  return (
    <ContainerHeader>
      <DateRangeStyles>
        <DateRange />
        <h1>{title}</h1>
      </DateRangeStyles>
      <MouthsBtn />
    </ContainerHeader>
  )
}

export default Header
