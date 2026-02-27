import { defaultTheme } from '@/styles/themes/default'
import styled from 'styled-components'

export const Btn = styled.button`
  padding: 1.25rem 0.625rem;
  background-color: ${defaultTheme['color-3']};
  border: none;
  border-radius: 1.25rem;
  padding: 1.25rem;
  color: ${defaultTheme['color-2']};
  font-weight: 800;
  width: 100%;
  text-transform: capitalize;
  cursor: pointer;
`
