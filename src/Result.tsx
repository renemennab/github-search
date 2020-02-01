import React from 'react'
import Title from './Title'
import Search from './Search'
import styled from 'styled-components'

export function Result(props: any) {
    return (
        <ResultStyles>
            <div className="ResultTitle">
                <Title />
            </div>
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
    padding: 35px;
    display: grid;
    grid-template-columns: 280px auto;
    grid-template-rows: 50px auto;
    grid-template-areas: 'ResultTitle search search search' 'profile repositories repositories repositories' 'profile repositories repositories repositories';
    grid-gap: 53px 75px;
    .ResultTitle {
        grid-area: ResultTitle;
    }

    .search {
        grid-area: search;
        #search {
            width: 100%;
        }
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
        grid-template-rows: 70px 1fr 1fr 1fr;
        grid-template-areas: 'ResultTitle ResultTitle ResultTitle ResultTitle' 'search search search search' 'profile profile profile profile' 'repositories repositories repositories repositories';

        .ResultTitle {
            grid-area: ResultTitle;
        }

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
