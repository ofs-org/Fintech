import summaryIcon from '@/assets/icons/resumo.svg'
import salesIcon from '@/assets/icons/vendas.svg'
import FintechSVG from '@/components/FintechSVG'
import { SideNavStyles } from './styles'
const SideNav = () => {
  return (
    <SideNavStyles>
      <FintechSVG title="FinTech | OFS" />
      <ul>
        <li>
          <span>
            <img src={summaryIcon} alt="" />
          </span>
          <a href="#summary">Summary</a>
        </li>
        <li>
          <span>
            <img src={salesIcon} alt="" />
          </span>
          <a href="#sales">Sales</a>
        </li>
      </ul>
    </SideNavStyles>
  )
}

export default SideNav
