import { spaces } from '@/styles'
import { defaultTheme } from '@/styles/themes/default'
import styled from 'styled-components'

export const DateRangeStyled = styled.div`
  display: flex;
  padding: ${spaces.gap};
  border-radius: ${spaces.gap};
  background: ${defaultTheme['color-5']};
  gap: ${spaces.gap_small};
  div {
    flex: 1;
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`
