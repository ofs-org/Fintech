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
      <div>Nome: {data.nome}</div>
      <div>Identificador: {data.id}</div>
      <div>
        Valor da Venda:{' '}
        {data.preco.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        })}
      </div>
      <div>Status: {data.status}</div>
      <div>Tipo de Pagamento: {data.pagamento}</div>
    </SaleItem>
  )
}
export default Sale
