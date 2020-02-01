import React from 'react'
import styled from 'styled-components'
import SearchIcon from './searchIcon'

export default function Search(props: any) {
    fetch('https://api.github.com/users/renemennab')
        .then(response => {
            return response.json()
        })
        .then(myJson => {
            console.log(myJson)
        })

    return (
        <SearchStyles id="search">
            <form action="#">
                <input type="text" id="searchText" name="search" />

                <button id={'submitBtn'} type="submit">
                    <SearchIcon />
                </button>
            </form>
        </SearchStyles>
    )
}
const SearchStyles = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;


    form {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
    }
    #searchText {
        width: 90%;
        border-radius: 2px;
        box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.18);
        border: none;
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
                transform: scale(-1, 1) translateX(-100%);
            }
        }
        @media screen and (max-width: 600px) {
            svg {
            width: 25px;
    }
    }
`
