import React from 'react'
import styled from 'styled-components'
import { colors } from './constants'

export function NotFound(props: any) {
    return <NotFoundStyles>User not found :&#40;</NotFoundStyles>
}

const NotFoundStyles = styled.div`
    width: 100%;
    font-size: 40px;
    text-align: center;
    margin-top: 125px;
    color: ${colors.purple};
`
