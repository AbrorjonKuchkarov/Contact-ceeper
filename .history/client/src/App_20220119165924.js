import React, {Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About'

const App = () => {
  return (
    <Router>
    <Fragment className="App">
      <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
        </div>
    </Fragment>
    </Router>
  );
}

export default App;
