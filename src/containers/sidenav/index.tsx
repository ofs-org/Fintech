import summaryIcon from '@/assets/icons/resumo.svg'
import salesIcon from '@/assets/icons/vendas.svg'
import FintechSVG from '@/components/FintechSVG'
import { SideNavStyles } from './styles'
import { NavLink } from 'react-router-dom'
const SideNav = () => {
  return (
    <SideNavStyles>
      <FintechSVG title="FinTech | OFS" />
      <ul>
        <li>
          <span>
            <img src={summaryIcon} alt="" />
          </span>
          <NavLink to="/">Summary</NavLink>
        </li>
        <li>
          <span>
            <img src={salesIcon} alt="" />
          </span>
          <NavLink to="/sales">Sales</NavLink>
        </li>
      </ul>
    </SideNavStyles>
  )
}

export default SideNav
