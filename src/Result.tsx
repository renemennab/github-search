import React from 'react'
import styled from 'styled-components'
import StarIcon from './icons/star-icon'
import CompanyIcon from './icons/company-icon'
import LocationIcon from './icons/location-icon'
import FollowersIcon from './icons/followers-icon'
import RepositorieIcon from './icons/repositorie-icon'
import MailIcon from './icons/mail-icon'
import { colors } from './constants'

export function Result(props: any) {
    const placeholder = '--'

    /**
     * this function is necessary to remove '-' characters and add spaces between the words.
     * it also makes the first letter capitalized
     * @param name
     */
    function treatReposNames(name: string) {
        const capitalFirstLetter = name.charAt(0).toUpperCase() + name.substring(1)
        const addSpaces = capitalFirstLetter.replace(/-/g, ' ')

        return addSpaces
    }

    /**
     * this function is used by the sort array method.
     * it actually orders the array putting the smaller first,
     * but because of the way react renders them, the larger renders at the top.
     * @param a
     * @param b
     */
    function sortReposByStars(a: any, b: any) {
        if (a.stargazers_count < b.stargazers_count) {
            return 1
        }
        if (a.stargazers_count > b.stargazers_count) {
            return -1
        }

        return 0
    }

    return (
        <ResultStyles>
            <div className="profile">
                <div className="profile__image">
                    <img src={props.profile.avatar_url} alt="Italian Trulli" />
                </div>
                <div className="profile__name">{props.profile.name || placeholder}</div>
                <div className="profile__login">{props.profile.login || placeholder}</div>
                <div className="profile__bio">{props.profile.bio || placeholder}</div>
                <div className="profile__icons">
                    <div className="profile__icons--company">
                        <CompanyIcon />
                        {props.profile.company || placeholder}
                    </div>
                    <div className="profile__icons--location">
                        <LocationIcon />
                        {props.profile.location || placeholder}
                    </div>
                    <div className="profile__icons--email">
                        <MailIcon />
                        {props.profile.email || placeholder}
                    </div>
                    <div className="profile__icons--following">
                        <StarIcon />
                        {props.profile.following}
                    </div>
                    <div className="profile__icons--repos">
                        <RepositorieIcon /> {props.repo.length}
                    </div>
                    <div className="profile__icons--followers">
                        <FollowersIcon />
                        {props.profile.followers}
                    </div>
                </div>
            </div>
            <div className="repositories">
                {props.repo.sort(sortReposByStars).map((repository: any, index: number) => {
                    return (
                        <div key={repository.name + index} className="repositories__repository">
                            <a href={repository.html_url} className="repositories__repository--name">
                                {treatReposNames(repository.name)}
                            </a>
                            <h2 className="repositories__repository--discription">
                                {repository.discription || placeholder}
                            </h2>
                            <span className="repositories__repository--stars">
                                <StarIcon />
                                {repository.stargazers_count}
                            </span>
                        </div>
                    )
                })}
            </div>
        </ResultStyles>
    )
}

const ResultStyles = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto;
    grid-template-areas: 'profile repositories ';
    grid-gap: 53px 75px;
    svg {
        margin-right: 7px;
        height: 24px;
    }

    .profile {
        grid-area: profile;
        display: flex;
        flex-direction: column;
        font-size: 20px;
        max-width: 280px;
        &__image {
            width: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
        &__name {
            font-size: 35px;
            margin-top: 12px;
        }

        &__bio {
            margin-top: 7px;
            margin-bottom: 33px;
        }
        &__icons {
            > div {
                display: flex;
                margin-bottom: 7px;
            }
        }
    }

    .repositories {
        grid-area: repositories;
        display: flex;
        flex-direction: column;

        &__repository {
            display: flex;
            flex-direction: column;
            margin-bottom: 30px;
            &--name {
                margin: 0px;
                color: ${colors.purple};
                font-size: 35px;
                font-weight: normal;
                text-decoration: none;
            }
            &--discription {
                margin: 0px;
                font-weight: normal;
                font-size: 20px;
            }
            &--stars {
                display: flex;
                font-size: 20px;
            }
        }
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        .profile {
            width: 100%;
            margin-bottom: 30px;
        }

        .repositories {
            width: 100%;
            max-width: 280px;
        }
    }
`
