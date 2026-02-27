import { spaces } from '@/styles'
import { defaultTheme } from '@/styles/themes/default'
import styled from 'styled-components'

export const DateLabel = styled.label`
  display: block;
  margin-bottom: ${spaces.gapS};
  font-weight: 600;
  font-size: 1rem;
  color: ${defaultTheme['color-2']};
  padding: ${spaces.gapS} 0.75rem;
  background-color: ${defaultTheme['color-4']};
  border-radius: ${spaces.gap};
`
export const DateInputStyles = styled(DateLabel).attrs({
  as: 'input'
})`
  border: none;
  font-family: monospace;
  font-size: 1rem;
`
