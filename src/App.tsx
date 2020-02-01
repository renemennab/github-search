import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Search from './Search'
import { Result } from './Result'

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" render={(props: any) => <Search />} />
                <Route path="/result" exact render={(props: any) => <Result />} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
