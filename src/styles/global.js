import { createGlobalStyle } from "styled-components"

const globalStyle = createGlobalStyle`
html {
  font-family: 'Montserrat', sans-serif;
  background-color: ${props => props.theme.background};

  /* transition: background-color 0.2s ease-in-out; */
  /* background-color: #282a36; */
  transition: background 0.5s ease 0s, color 0.5s ease 0s;

}

div,
p {
  /* color: #f8f8f2; */
  color: ${props => props.theme.textColor};
}

h1,
h2,
h3, a {
  color: ${props => props.theme.primary};
  /* color: #ff79c6; */
}



`

export default globalStyle
