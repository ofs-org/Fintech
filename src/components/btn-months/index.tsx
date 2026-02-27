import { useData } from '@/context/data-context'
import { Btn } from './styles'

type BtnMonthsProps = {
  n: number
}

function nameMonth(n: number) {
  const date = new Date()
  date.setMonth(date.getMonth() + n)
  return new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date)
}

const BtnMonths = ({ n }: BtnMonthsProps) => {
  const { setStart, setEnd } = useData()

  const FormatDate = (date: Date) => {
    const dd = String(date.getDate()).padStart(2, '0')
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const yyyy = String(date.getFullYear())
    return `${yyyy}-${mm}-${dd}`
  }

  function setMonth(n: number) {
    const date = new Date()
    date.setMonth(date.getMonth() + n)
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    setStart(FormatDate(firstDay))
    setEnd(FormatDate(lastDay))
  }
  return <Btn onClick={() => setMonth(n)}>{nameMonth(n)}</Btn>
}

export default BtnMonths
