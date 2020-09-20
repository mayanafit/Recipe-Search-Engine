import React from 'react';
import './scss/style.scss';
import { Result, Search, NotFound } from './Pages';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <div className="body">
      <Router>
        <Switch> 
          <Route exact path="/" component={Search}/>
          <Route exact path="/result/:query" component={Result}/>
          <Route exact path='*' component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
