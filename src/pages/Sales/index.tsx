import ItemForSales from '@/components/item-for-sales'
import { useData } from '@/context/data-context'
import { SalesStyles } from './styles'

const Sales = () => {
  const { data } = useData()
  if (data === null) return null
  return (
    <>
      <SalesStyles>
        <ul>
          {data.map((venda) => (
            <li key={venda.id}>
              <ItemForSales venda={venda} />
            </li>
          ))}
        </ul>
      </SalesStyles>
    </>
  )
}

export default Sales
