import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
