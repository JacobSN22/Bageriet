import styled from 'styled-components'

export const NavStyle = styled.nav`
        text-align: center;
        color: ${props => props.theme.colors.primary};
    

    li {
        display: inline;
        margin: 0 2em;
        a {
            color: ${props => props.theme.colors.primary};
            text-decoration: none;
            font-family: sans-serif;
        }
    }

    h1 {
        display: inline;
        margin: 0 1em;
        font-size: 3em;
        font-family: 'Lobster', cursive;
    }

    .ontop{
        position: absolute;
        top: 0;
        width: 100%;
       
    }
    
`