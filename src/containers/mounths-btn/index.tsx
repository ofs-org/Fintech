import BtnMonths from '../../components/btn-months'
import { ContainerMounthsBtn } from './styles'

const MouthsBtn = () => {
  return (
    <ContainerMounthsBtn>
      <BtnMonths n={-3} />
      <BtnMonths n={-2} />
      <BtnMonths n={-1} />
      <BtnMonths n={0} />
    </ContainerMounthsBtn>
  )
}

export default MouthsBtn
