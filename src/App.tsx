import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Search from './Search'
import { Result } from './Result'

const App: React.FC = () => {
    const [RequestResponse, setRequestResponse] = useState({ profile: {}, repo: {} })

    console.log(RequestResponse)
    function handleSubmitForm(event: any, SearchString: string) {
        event.preventDefault()
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
                })
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" render={(props: any) => <Search {...props} submitHandler={handleSubmitForm} />} />
                <Route
                    path="/result"
                    exact
                    render={(props: any) => <Result profile={RequestResponse.profile} repo={RequestResponse.repo} />}
                />
            </Switch>
        </BrowserRouter>
    )
}

export default App
