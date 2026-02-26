import { useData } from '@/context/data-context'
import DateRange from '../date-range'

const Header = () => {
  const { data } = useData()
  console.log(data)

  return (
    <div>
      <DateRange />
    </div>
  )
}

export default Header
