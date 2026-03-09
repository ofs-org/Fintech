import type { ISales } from '@/context/data-context'
import { Box } from '@/styles'
import { NavLink } from 'react-router-dom'
import { SalesStyles } from './styles'

const ItemForSales = ({ venda }: { venda: ISales }) => {
  return (
    <Box>
      <SalesStyles>
        <NavLink style={{ fontFamily: 'monospace' }} to={`/sales/${venda.id}`}>
          <span>{venda.id}</span>
        </NavLink>
        <div>
          <span>{venda.nome}</span>
        </div>
        <div>
          <span>
            {venda.preco.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </span>
        </div>
      </SalesStyles>
    </Box>
  )
}

export default ItemForSales
