import { spaces } from '@/styles'
import styled from 'styled-components'

export const SalesStyles = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
  gap: ${spaces.gap_small};
  font-size: 1rem;
  margin-bottom: ${spaces.gap_small};
  & div:last-child {
    justify-self: end;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`
