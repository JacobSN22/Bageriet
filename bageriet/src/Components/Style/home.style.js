import styled from 'styled-components'

export const HomeStyle = styled.div`
    text-align: center;

    

    h3 {
        font-size: 2.5em;
        font-family: 'Lobster', cursive;
    }

    h4 {
        font-family: sans-serif;
        font-size: 1.2em;
        margin: 0.5em 0 0 0;
    }

    p {
        font-size: 1.15em;
        font-family: sans-serif;
        font-weight: 300;
        margin: 0 0 2em 0;
    }

    img {
        width: 100%;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 0 13em;
        gap: 4em;
    }

    div img {
        width: 60%;
        border-radius: 10em;

    }
`