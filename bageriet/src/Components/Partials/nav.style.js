import styled from 'styled-components'
import HeaderLogo from "../fonts-images/images/slides/slide1.jpg";

export const NavStyle = styled.nav`
        text-align: center;
        color: ${props => props.theme.colors.primary};
        background-color: ${props => props.theme.colors.quaternary};
        padding-bottom: 2em;

    li {
        display: inline;
        margin: 2em 2em;
        a {
            color: ${props => props.theme.colors.primary};
            text-decoration: none;
            font-family: sans-serif;
        }
        a:hover {
            color: ${props => props.theme.colors.dark};
        }
    }

    ul {
        display: inline;
    }

    h1 {
        display: inline;
        margin: 0 1em;
        font-size: 3em;
        font-family: 'Lobster', cursive;
    }
`

export const HeroImg = styled.nav`
background-image: url(${HeaderLogo});
background-position: center;
height: 750px;
`