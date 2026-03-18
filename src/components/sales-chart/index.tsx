import type { ISales } from '@/context/data-context'
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
import { ChartContainer } from './styles'

type SaleDay = {
  data: string
  pago: number
  processando: number
  falha: number
}

function transformData(data: ISales[]): SaleDay[] {
  const days = data.reduce((acc: { [key: string]: SaleDay }, item) => {
    const day = item.data.split(' ')[0]
    if (!acc[day]) {
      acc[day] = {
        data: day,
        pago: 0,
        falha: 0,
        processando: 0
      }
    }
    acc[day][item.status] += item.preco
    return acc
  }, {})
  console.log(Object.values(days))
  return Object.values(days).map((day) => ({
    ...day,
    data: day.data.substring(5)
  }))
}

const SalesChart = ({ data }: { data: ISales[] }) => {
  const transformedData = transformData(data)
  console.log(transformedData)

  return (
    <ChartContainer>
      <ResponsiveContainer width="99%" height={360}>
        <LineChart data={transformedData}>
          <YAxis />
          <XAxis dataKey="data" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pago"
            stroke="#92d35d"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="processando"
            stroke="#FBCB21"
            strokeWidth={2}
          />
          <Line type="monotone" dataKey="falha" stroke="#000" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default SalesChart
