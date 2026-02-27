import { spaces } from '@/styles'
import { defaultTheme } from '@/styles/themes/default'
import styled from 'styled-components'

export const ContainerHeader = styled.header`
  margin-bottom: 1.25rem;
`

export const DateRangeStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spaces.gap};

  border-radius: ${spaces.gap};

  h1 {
    font-size: 1.5rem;
    padding: ${spaces.gap};
    border-radius: ${spaces.gap};
    background: ${defaultTheme['color-3']};
  }
`
