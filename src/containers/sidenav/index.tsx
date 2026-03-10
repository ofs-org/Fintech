import summaryIcon from '@/assets/icons/resumo.svg'
import salesIcon from '@/assets/icons/vendas.svg'
import FintechSVG from '@/components/FintechSVG'
import { NavLink } from 'react-router-dom'
import { SideNavStyles } from './styles'
const SideNav = () => {
  return (
    <SideNavStyles>
      <NavLink to="/">
        <FintechSVG title="FinTech | OFS" />
      </NavLink>
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
