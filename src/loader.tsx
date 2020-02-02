import React from 'react'
import styled from 'styled-components'
import { colors } from './constants'

export function Loader(props: any) {
    return (
        <LoaderStyles>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </LoaderStyles>
    )
}

const LoaderStyles = styled.div`
    display: inline-block;
    position: relative;
    width: 100%;
    height: 80px;
    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid ${colors.purple};
        border-radius: 50%;
        animation: rotate 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${colors.purple} transparent transparent transparent;
        left: 50%;
        top: 30vh;
        transform: translate(-50%, -50%);
        transform-origin: 
    }
    div:nth-child(1) {
        animation-delay: -0.45s;
    }
    div:nth-child(2) {
        animation-delay: -0.3s;
    }
    div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes rotate {
        0% {
            transform: translate(-50%, -50%) rotate(0deg) ;
        }
        100% {
            transform: translate(-50%, -50%)  rotate(360deg) ;
        }
    }
`
// transform-origin: center;
// transform-box: fill-box;