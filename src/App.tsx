import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import { Home } from "./Home";
import { Result } from "./Result";
import { NotFound } from "./NotFound";

const App: React.FC = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Result" exact component={Result} />
          <Route path="/NotFounds" exact component={NotFound} />
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default App;
