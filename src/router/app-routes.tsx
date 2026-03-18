import Sale from '@/pages/Sale'
import Sales from '@/pages/Sales'
import Summary from '@/pages/summary'
import { Routes, Route } from 'react-router-dom'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Summary />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/sales/:id" element={<Sale />} />
    </Routes>
  )
}

export default AppRouter
