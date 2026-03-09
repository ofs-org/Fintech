import Loading from '@/components/loading'
import type { ISales } from '@/context/data-context'
import useFetch from '@/hooks/use-fetch'
import { useParams } from 'react-router-dom'
import { SaleItem } from './style'

type SaleWithoutDate = Omit<ISales, 'data'>

const Sale = () => {
  const { id } = useParams()

  const { data, loading } = useFetch<SaleWithoutDate>(
    `https://data.origamid.dev/vendas/${id}`
  )
  if (loading === true) return <Loading />
  if (data === null) return null

  return (
    <SaleItem>
      <div>
        Nome: <span> {data.nome}</span>
      </div>
      <div>
        Identificador: <span>{data.id} </span>{' '}
      </div>
      <div>
        Valor da Venda:{' '}
        <span>
          {data.preco.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
          })}
        </span>
      </div>
      <div>
        Status: <span>{data.status}</span>
      </div>
      <div>
        Tipo de Pagamento: <span> {data.pagamento}</span>
      </div>
    </SaleItem>
  )
}
export default Sale
