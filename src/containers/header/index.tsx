import { useData } from '@/context/data-context'
import React from 'react'
import DateRange from '../date-range'
import MouthsBtn from '../mounths-btn'
import { ContainerHeader, DateRangeStyles } from './styles'
import { useLocation } from 'react-router-dom'

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

  const { data } = useData()
  console.log(data)

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
