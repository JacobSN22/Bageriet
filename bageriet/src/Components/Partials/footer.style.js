import styled from 'styled-components'

export const FooterStyle = styled.footer`
color: ${props => props.theme.colors.primary};
background-color: ${props => props.theme.colors.secondary};
text-align: center;
padding: 2em 0 0 0;

div {
    color: ${props => props.theme.colors.tertiary};
    background-color: ${props => props.theme.colors.quinary};
    padding: 1em;
    margin: 3em 0 0 0;
}

h2 {
    font-family: 'Lobster', cursive;
}

p {
    font-family: sans-serif;
    margin: 0.5em 0;
}

`