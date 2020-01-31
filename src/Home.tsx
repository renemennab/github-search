import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import Search from './Search'
export function Home(props: any) {
    return (
        <HomeStyles>
            <Title />
            <Search />
        </HomeStyles>
    )
}
const HomeStyles = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    #title {
        font-size: 60px;
        margin-bottom: 10px;
    }

    @media screen and (max-width: 600px) {
        #title {
        font-size: 40px;
    }
`
