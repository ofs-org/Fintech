import BtnMonths from '../../components/btn-months'
import { ContainerMouthsBtn } from './styles'

const MouthsBtn = () => {
  return (
    <ContainerMouthsBtn>
      <BtnMonths n={-3} />
      <BtnMonths n={-2} />
      <BtnMonths n={-1} />
      <BtnMonths n={0} />
    </ContainerMouthsBtn>
  )
}

export default MouthsBtn
