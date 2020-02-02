import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Search from './Search'
import { Result } from './Result'
import { NotFound } from './NotFound'
import { Loader } from './loader'

const App: React.FC = () => {
    const [RequestResponse, setRequestResponse] = useState({ profile: {}, repo: {} })
    const [UserFound, setUserFound] = useState(false)
    const [UseLoader, setUseLoader] = useState(false)

    console.log(RequestResponse)
    function handleSubmitForm(event: any, SearchString: string, props: any) {
        event.preventDefault()
        props.history.push('/result')
        setUseLoader(true)
        setUserFound(false)
        try {
            Promise.all([
                fetch(`https://api.github.com/users/${SearchString}`).then(function(response) {
                    return response.json()
                }),
                fetch(`https://api.github.com/users/${SearchString}/repos`).then(function(response) {
                    return response.json()
                })
            ])
                .then(function(responses) {
                    return responses.map(function(response) {
                        return response
                    })
                })
                .then(function(data) {
                    setRequestResponse({ profile: data[0], repo: data[1] })
                    setUserFound(data[0].message != 'Not Found')
                    setUseLoader(false)
                })
        } catch (err) {
            console.error(err)
            setUserFound(false)
            setUseLoader(false)
        }
    }
    function getResultOutput() {
        {
            if (UseLoader) {
                return <Loader />
            } else if (UserFound) {
                return <Result profile={RequestResponse.profile} repo={RequestResponse.repo} />
            } else {
                return <NotFound />
            }
        }
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={(props: any) => <Search {...props} submitHandler={handleSubmitForm} />} />
                <Route
                    path="/result"
                    render={(props: any) => {
                        return (
                            <>
                                <Search {...props} submitHandler={handleSubmitForm} />
                                {getResultOutput()}
                            </>
                        )
                    }}
                />
            </Switch>
        </BrowserRouter>
    )
}

export default App
