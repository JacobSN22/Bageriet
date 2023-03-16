import styled from 'styled-components'

export const NewsStyle = styled.div`
text-align: center;


.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 5em 13em;
}

.news {
    padding: 0 4em 0 4em;
}

img {
    border-radius: 50%;
    width: 100%;
}

h2 {
    font-size: 1.3em;
    font-family: sans-serif;
    margin: 0;
    color: ${props => props.theme.colors.secondary};
}

p {
    font-family: sans-serif;
    margin-top: 0.5em;
    color: ${props => props.theme.colors.secondary};
}
`