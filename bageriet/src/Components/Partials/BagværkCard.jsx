import React from 'react'
import styled from 'styled-components'

export const BagværkCard = ({data}) => {
  return (
    <StyledCard className="bagværk" key={data.id}>
    <img src={data.image.fullpath} alt="Example" />
    <h2 className="comments">{data.num_comments}</h2>
    <h2>{data.title.substring(0, 15)}</h2>
    <p>{data.teaser.substring(0, 90)} </p> 
    <button>SE MERE</button>
</StyledCard>
  )
}
 const StyledCard = styled.figure`
    display: grid;
    height: 100%;
    min-height: 400px;
    grid-auto-rows: repeat(5, auto);
    gap: 1rem;
     img {
        aspect-ratio: 1/1;
        object-fit: cover;
    }

    > :nth-child(2) {
        margin-bottom: auto;
    }
`
