import styled from 'styled-components'

export const ContactStyle = styled.div`

h2 {
    text-align: center;
    font-size: 2em;
    font-family: 'Lobster', cursive;
}

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3em;
    padding: 0 18em;
    text-align: right;
}

input {
    display: block;
    padding: 0.5em 0 0.5em 0.5em;
    width: 100%;
    margin: 0 0 1em 0;
    background-color: ${props => props.theme.colors.senary};
    border: 0;
}

input::placeholder {
    color: ${props => props.theme.colors.tertiary};
}

textarea {
    display: block;
    padding: 0.5em 0 0 0.5em;
    resize: none;
    width: 100%;
    background-color: ${props => props.theme.colors.senary};
    border: 0;
}

textarea::placeholder {
    color: ${props => props.theme.colors.tertiary};
}

button {
    padding: 0.8em 3em;
    margin: 0.5em 0 10em 0;
    background-color: ${props => props.theme.colors.quaternary};
    border: 0;
    color: ${props => props.theme.colors.primary};   
}
`