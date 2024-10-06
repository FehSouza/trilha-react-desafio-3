import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }

  html {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
  
  body {
    width: 100%;
    height: 100%;
    background-color: #1E192C;
    color: #FFFFFF;
    overflow-x: hidden;
  }
  
  #root {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
`
