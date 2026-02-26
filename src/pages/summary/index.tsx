import { useData } from '@/context/data-context'

const Summary = () => {
  const { data } = useData()
  console.log(data)

  return <div>Summary</div>
}

export default Summary
