import React from 'react'
import styled from 'styled-components'

export default function Title(props: any) {
    return (
        <TitleStyles id="title">
            <strong>Github</strong> Search
        </TitleStyles>
    )
}
const TitleStyles = styled.span`
    font-style: italic;
    font-weight: 200;
    font-size: 40px;

    strong {
        font-style: normal;
        font-family: Monaco;
        font-weight: 400;
    }
    @media screen and (max-width: 600px) {
        font-size: 35px;
`
