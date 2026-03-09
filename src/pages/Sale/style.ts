import { spaces } from '@/styles'
import { defaultTheme } from '@/styles/themes/default'
import styled from 'styled-components'

export const SaleItem = styled.div`
  padding: ${spaces.gap};

  border-radius: ${spaces.gap};
  background: ${defaultTheme['color-5']};
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  gap: 1rem;
  span {
    font-weight: 600;
    padding: 0.25rem 0.5rem;
    border: 1px solid ${defaultTheme['color-2']};
    border-radius: 0.5rem;
    background-color: ${defaultTheme['color-3']};
  }
`
