import React from 'react'
import styled from 'styled-components'
import StarIcon from './icons/star-icon'
import CompanyIcon from './icons/company-icon'
import LocationIcon from './icons/location-icon'
import FollowersIcon from './icons/followers-icon'
import RepositorieIcon from './icons/repositorie-icon'
import MailIcon from './icons/mail-icon'

export function Result(props: any) {
    const placeholder = '--'

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
                        {props.profile.following || placeholder}
                    </div>
                    <div className="profile__icons--repos">
                        <RepositorieIcon /> {props.repo.length}
                    </div>
                    <div className="profile__icons--followers">
                        <FollowersIcon />
                        {props.profile.followers || placeholder}
                    </div>
                </div>
            </div>
            <div className="repositories"></div>
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
    }

    .profile {
        grid-area: profile;
        display: flex;
        flex-direction: column;
        font-size: 20px;
        &__image {
            width: 280px;
            height: 280px;
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
    }

    @media screen and (max-width: 600px) {
        width: 100vw;
        display: flex;

        .profile {
        }

        .repositories {
        }
    }
`
