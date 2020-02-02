import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Search from './Search'
import { Result } from './Result'

const App: React.FC = () => {
    const [RequestProfileResponse, setRequestProfileResponse] = useState({})
    const [RequestReposResponse, setRequestReposResponse] = useState({})

    console.log(RequestProfileResponse)
    console.log(RequestReposResponse)
    function handleSubmitForm(event: any, SearchString: string) {
        event.preventDefault()
        try {
            Promise.all([
                fetch(`https://api.github.com/users/${SearchString}`),
                fetch(`https://api.github.com/users/${SearchString}/repos`)
            ]).then(([profile, repo]) => {
                setRequestProfileResponse(profile.json())
                setRequestReposResponse(repo.json())
            })
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" render={(props: any) => <Search {...props} submitHandler={handleSubmitForm} />} />
                <Route path="/result" exact render={(props: any) => <Result />} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
