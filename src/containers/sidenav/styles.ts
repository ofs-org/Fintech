import { spaces } from '@/styles'
import { defaultTheme } from '@/styles/themes/default'
import styled from 'styled-components'

export const SideNavStyles = styled.nav`
  padding: ${spaces.gap};
  border-radius: ${spaces.gap};
  background: ${defaultTheme['color-3']};
  li {
    display: flex;
    align-items: center;
    gap: ${spaces.gapS};
    &:hover span {
      background-color: ${defaultTheme['color-3']};
    }
    a {
      flex: 1;
      font-size: 1.125rem;
      text-decoration: none;
      color: ${defaultTheme['color-2']};
      padding: ${spaces.gapS} 0;
    }
  }
  span {
    width: 2rem;
    height: 2rem;
    background-color: ${defaultTheme['color-4']};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${spaces.gap};
  }
`
