import { useData } from '@/context/data-context'
import DateRange from '../date-range'
import MouthsBtn from '../mounths-btn'
import { ContainerHeader } from './styles'

const Header = () => {
  const { data } = useData()
  console.log(data)

  return (
    <ContainerHeader>
      <div>
        <DateRange />
      </div>
      <MouthsBtn />
    </ContainerHeader>
  )
}

export default Header
