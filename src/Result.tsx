import React from 'react'
import Search from './Search'
import styled from 'styled-components'

export function Result(props: any) {
    return (
        <ResultStyles>
            <div className="search">
                <Search />
            </div>
            <div className="profile"></div>
            <div className="repositories"></div>
        </ResultStyles>
    )
}

const ResultStyles = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 280px auto;
    grid-template-rows: 50px auto;
    grid-template-areas: 'search search search search' 'profile repositories repositories repositories' 'profile repositories repositories repositories';
    grid-gap: 53px 75px;

    .search {
        grid-area: search;
    }

    .profile {
        grid-area: profile;
    }

    .repositories {
        grid-area: repositories;
    }

    @media screen and (max-width: 600px) {
        width: 100vw;
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-areas: 'search search search search' 'profile profile profile profile' 'repositories repositories repositories repositories';

        .search {
            grid-area: search;
        }

        .profile {
            grid-area: profile;
        }

        .repositories {
            grid-area: repositories;
        }
    }
`
