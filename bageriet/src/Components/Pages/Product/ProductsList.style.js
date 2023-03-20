import styled from 'styled-components'

export const ProductListStyle = styled.div`
text-align: center;


.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1em;
}

img {
        aspect-ratio: 1/1;
        object-fit: cover;
    }

.news {
    padding: 0 4em 0 4em;
}

h2 {
    font-size: 1.3em;
    font-family: sans-serif;
    margin: 0;
    color: ${props => props.theme.colors.secondary};
}

.comments {
    color: ${props => props.theme.colors.tertiary};

}

p {
    font-family: sans-serif;
    margin-top: 0.5em;
    color: ${props => props.theme.colors.secondary};
}

button {
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.quaternary};
    border: 0;
    font-weight: 700;
    padding: 1em 2.5em;
    margin-top: 1em;
}

button:hover {
    background-color: ${props => props.theme.colors.quaternary};
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
}
`