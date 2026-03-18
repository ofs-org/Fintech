import { spaces } from '@/styles'
import { defaultTheme } from '@/styles/themes/default'
import styled from 'styled-components'

export const LoadingStyle = styled.div`
  display: flex;
  height: 200px;
  justify-content: center;
  align-items: center;
  div {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: ${spaces.gap_small};
    border: 4px solid ${defaultTheme['color-3']};
    border-right: ${defaultTheme['color-1']};
    animation: spin 1s infinite;
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  }
`
