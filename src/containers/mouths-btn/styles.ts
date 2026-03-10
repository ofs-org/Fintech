import styled from 'styled-components'

export const ContainerMouthsBtn = styled.div`
  margin-block: 1.25rem;
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  align-items: center;
  flex: 1;
  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`
