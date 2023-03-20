import styled from 'styled-components'

export const ProductStyle = styled.div`
text-align: center;

.productgrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

h2 {
    font-size: 2em;
    font-family: 'Lobster', cursive;
    color: ${props => props.theme.colors.secondary};
}

p {
    font-family: sans-serif;
    margin-top: 0.5em;
    color: ${props => props.theme.colors.secondary};
}
`