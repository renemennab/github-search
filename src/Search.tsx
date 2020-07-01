import React, { useState } from 'react'
import styled from 'styled-components'
import SearchIcon from './icons/Search-Icon'

export default function Search(props: any) {
    const [SearchString, setSearchString] = useState('')

    const currentPath = props.location.pathname.replace('/', '')

    return (
        <SearchStyles id="search" className={currentPath}>
            <div id="title">
                <strong>Github</strong> Search
            </div>
            <form onSubmit={event => props.submitHandler(event, SearchString, props)}>
                <input
                    type="text"
                    id="searchText"
                    name="search"
                    value={SearchString}
                    onChange={event => setSearchString(event.target.value)}
                />

                <button id={'submitBtn'} type="submit">
                    <SearchIcon />
                </button>
            </form>
        </SearchStyles>
    )
}
const SearchStyles = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    #title {
        font-style: italic;
        font-weight: 200;
        font-size: 60px;
        margin-bottom: 10px;
        white-space: nowrap;

        strong {
            font-style: normal;
            font-family: Monaco;
            font-weight: 400;
        }
    }

    form {
        width: 80%;
        height: 50px;
        display: flex;
        justify-content: center;
    }
    #searchText {
        width: 90%;
        border-radius: 2px;
        box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.18);
        border: none;
        border: 1px solid rgba(92, 92, 92, 0.4);
    }
    #submitBtn {
        max-width: 100px;
        background: #ac53f2;
        width: 30%;
        height: inherit;
        border-radius: 2px;
        svg {
            width: 35px;
            path {
                fill: white;
            }
        }
    }
    &.result {
        height: 50px;
        flex-direction: row;

        form {
            width: 100%;
        }
        #title {
            font-size: 40px;
            margin-right: 70px;
        }
    }
    @media screen and (max-width: 600px) {
        #title {
            font-size: 40px;
        }
        form {
            width: 100%;
        }
        &.result {
            height: unset;
            flex-direction: column;
            #title {
                margin-right: 0px;

                font-size: 35px;
            }
        }

        svg {
            width: 25px;
        }
    }
`
