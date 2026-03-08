import { spaces } from '@/styles'
import { defaultTheme } from '@/styles/themes/default'
import styled from 'styled-components'

export const SaleItem = styled.div`
  padding: ${spaces.gap};
  border-radius: ${spaces.gap};
  background: ${defaultTheme['color-5']};
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`
