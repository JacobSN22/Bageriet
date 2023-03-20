import styled from 'styled-components'

export const CategoriesStyle = styled.div`
text-align: right;
max-width: 300px;

li {
    display: block;

    a {
    color: blue;
    text-decoration: none;
    color: ${props => props.theme.colors.quaternary};
    font-size: 1.5em;
}
}


`