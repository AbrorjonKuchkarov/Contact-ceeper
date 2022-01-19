import React, {Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <Router>
    <Fragment className="App">
      <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' component={<Home/>} />
            <Route path='/about' component={<About/>} />
          </Routes>
        </div>
    </Fragment>
    </Router>
  );
}

export default App;
