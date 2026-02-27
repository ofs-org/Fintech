import { useData } from '@/context/data-context'
import DateInput from '../../components/date-input'

const DateRange = () => {
  const { start, setStart, end, setEnd } = useData()

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
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
    </form>
  )
}

export default DateRange
