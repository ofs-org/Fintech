import { useData } from '@/context/data-context'
import React from 'react'
import DateRange from '../date-range'
import MouthsBtn from '../mounths-btn'
import { ContainerHeader, DateRangeStyles } from './styles'

const Header = () => {
  const [title, setTitle] = React.useState('Resumo')
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
