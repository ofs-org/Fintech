import { useData } from '@/context/data-context'
import DateInput from '../../components/date-input'
import { DateRangeStyled } from './styles'

const DateRange = () => {
  const { start, setStart, end, setEnd } = useData()

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateRangeStyled>
        <DateInput
          label="Inicio"
          value={start}
          onChange={({ target }) => setStart(target.value)}
        />

        <DateInput
          label="Final"
          value={end}
          onChange={({ target }) => setEnd(target.value)}
        />
      </DateRangeStyled>
    </form>
  )
}

export default DateRange
