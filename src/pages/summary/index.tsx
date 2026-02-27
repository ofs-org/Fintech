import { useData } from '@/context/data-context'
import { Box, Title } from '@/styles'
import { SummaryStyles } from './styles'

const Summary = () => {
  const { data } = useData()
  if (data === null) return null
  return (
    <section>
      <SummaryStyles>
        <Box>
          <Title>Recebido</Title>
          <span>
            {data
              .filter((i) => i.status === 'pago')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </span>
        </Box>
        <Box>
          <Title>Vendas</Title>
          <span>
            {data
              .filter((i) => i.status !== 'falha')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </span>
        </Box>
        <Box>
          <Title>Processando</Title>
          <span>
            {data
              .filter((i) => i.status === 'processando')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </span>
        </Box>
      </SummaryStyles>
      <Box>Graficos</Box>
    </section>
  )
}

export default Summary
