import React, {Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <Router>
    <Fragment className="App">
      <Navbar />
        <div className="container">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
    </Fragment>
    </Router>
  );
}

export default App;
