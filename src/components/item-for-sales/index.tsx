import type { ISales } from '@/context/data-context'
import { Box } from '@/styles'
import { SalesStyles } from './styles'

const ItemForSales = ({ venda }: { venda: ISales }) => {
  return (
    <Box>
      <SalesStyles>
        <a style={{ fontFamily: 'monospace' }} href="">
          {venda.id}
        </a>
        <div>{venda.nome}</div>
        <div>
          {venda.preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </div>
      </SalesStyles>
    </Box>
  )
}

export default ItemForSales
