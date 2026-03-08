import type { ISales } from '@/context/data-context'
import { Box } from '@/styles'
import { SalesStyles } from './styles'
import { NavLink } from 'react-router-dom'

const ItemForSales = ({ venda }: { venda: ISales }) => {
  return (
    <Box>
      <SalesStyles>
        <NavLink style={{ fontFamily: 'monospace' }} to={`/sales/${venda.id}`}>
          {venda.id}
        </NavLink>
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
