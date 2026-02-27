import { spaces } from '@/styles'
import styled from 'styled-components'

export const SalesStyles = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
  gap: ${spaces.gapS};
  font-size: 1rem;
  margin-bottom: ${spaces.gapS};
  & div:last-child {
    justify-self: end;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`
