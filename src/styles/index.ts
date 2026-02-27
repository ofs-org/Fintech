import styles, { createGlobalStyle } from 'styled-components'
import { defaultTheme } from './themes/default'

export const spaces = {
  gapS: '0.625rem',
  gap: '1.25rem'
}

const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
  body {
  font-family: sans-serif;
  font-size: 1.5rem;
  background: #f9f9f9;
  color: ${defaultTheme['color-2']};
  background: ${defaultTheme['color-4']};
  }
  .box {
    padding: ${spaces.gap};
    border-radius: ${spaces.gap};
    background: ${defaultTheme['color-5']};
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  h1,h2, h3 {
    margin: 0;
    font-weight: 600;
  }
  .flex {
    display: flex;
    gap: ${spaces.gap};
  }
  .flex > * {
    flex: 1;
  }
  .mb {
    margin-bottom: ${spaces.gap};
  }
  .bg1 {
    background-color: ${defaultTheme['color-1']};
  }
  .bg2 {
    background-color: ${defaultTheme['color-2']};
  }
  .bg3 {
    background-color: ${defaultTheme['color-3']};
  }
  .bg4 {
    background-color: ${defaultTheme['color-4']};
  }
  .bg5 {
    background-color: ${defaultTheme['color-5']};
  }
  
  `
export const Container = styles.div`
 display: grid;
 padding: ${spaces.gap};
 gap: ${spaces.gap};
 grid-template-columns: 240px auto;
`

export const Box = styles.div`
flex: 1;
padding: ${spaces.gap};
border-radius: ${spaces.gap};
 background: ${defaultTheme['color-5']};
`

export const Title = styles.h2`
 margin: 0;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: ${spaces.gap};
  color: ${defaultTheme['color-1']};
`
export { GlobalStyles }
