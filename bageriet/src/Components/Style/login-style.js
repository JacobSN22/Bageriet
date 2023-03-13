import styled from 'styled-components'

export const LoginStyle = styled.div`

h2 {
    text-align: center;
    font-size: 2em;
    font-family: 'Lobster', cursive;
}

.center {
    display: flex;
  align-items: center;
  justify-content: center;
}

.center div {
  width: 500px;
  height: 500px;
}

.right {
    text-align: right;
}

input {
    display: block;
    padding: 0.7em 0 0.7em 0.7em;
    width: 100%;
    margin: 0 0 1em 0;
    background-color: ${props => props.theme.colors.senary};
    border: 0;
}

input::placeholder {
    color: ${props => props.theme.colors.tertiary};
}

button {
    padding: 0.8em 3em;
    margin: 0.5em 0 10em 0;
    background-color: ${props => props.theme.colors.quaternary};
    border: 0;
    color: ${props => props.theme.colors.primary};   
}

button:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.dark};   
}
`