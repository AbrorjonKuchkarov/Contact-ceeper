import React, {Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import AlertState from './context/alert/AlertState';
// import Alerts from './components/layout/Alerts';


import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
        <Router>
          <Fragment >
            <Navbar />
              <div className="container">
            
                <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/about' element={<About/>} />
                  <Route path='/register' element={<Register/>} />
                  <Route path='/login' element={<Login/>} />
                </Routes>
              </div>
          </Fragment>
        </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
