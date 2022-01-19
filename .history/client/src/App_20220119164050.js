import React, {Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <Router>
    <Fragment className="App">
      <Navbar />
    </Fragment>
    </Router>
  );
}

export default App;
