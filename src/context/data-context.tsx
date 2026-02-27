import { getDaysAGo } from '@/utils/days-a-go'
import React from 'react'
import useFetch from '../hooks/use-fetch'

export type ISales = {
  id: string
  nome: string
  preco: number
  status: 'pago' | 'processando' | 'falha'
  pagamento: 'boleto' | 'pix' | 'cartao'
  data: string
  parcelas: number | null
}

type IDataContext = {
  loading: boolean
  error: string | null
  data: ISales[] | null
  start: string
  end: string
  setStart: React.Dispatch<React.SetStateAction<string>>
  setEnd: React.Dispatch<React.SetStateAction<string>>
}

const DataContext = React.createContext<IDataContext | null>(null)

export const useData = () => {
  const context = React.useContext(DataContext)
  if (!context) throw new Error('useData precisa estar em DataContextProvider ')
  return context
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [start, setStart] = React.useState(getDaysAGo(15))
  const [end, setEnd] = React.useState(getDaysAGo(0))
  const { data, loading, error } = useFetch<ISales[]>(
    `https://data.origamid.dev/vendas/?inicio=${start}&final=${end}`
  )

  return (
    <DataContext.Provider
      value={{ data, loading, error, start, setStart, end, setEnd }}
    >
      {children}
    </DataContext.Provider>
  )
}
