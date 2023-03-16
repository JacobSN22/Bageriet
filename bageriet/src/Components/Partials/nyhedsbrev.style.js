import styled from 'styled-components'
import NyhedsLogo from "../fonts-images/images/newsletterbg.jpg";

export const NyhedsStyle = styled.div`
        text-align: left;
        color: ${props => props.theme.colors.primary};

.center {
    max-width: 1000px;
    margin: auto;
    padding: 8em 0 0 0;
}

h2 {
    font-family: 'Lobster', cursive;
    font-size: 2em;
    margin: 0 0 0.5em 0;
}

.sign {
    font-family: sans-serif;
    display: inline;
    background-color: ${props => props.theme.colors.tertiary};
    padding: 0.7em 0.9em 0.9em 0.9em;

}

.text {
    display: block;
    font-family: sans-serif;
}

input {
    display: inline;
    width: 80%;
    padding: 1em;
    border: 0;
}

button {
    padding: 1em;
    border: 0;
    background-color: ${props => props.theme.colors.quaternary};
    color: ${props => props.theme.colors.primary};

}
`

export const NyhedsImg = styled.div`
background-image: url(${NyhedsLogo});
background-position: center;
height: 500px;
margin-bottom: 10em;
`