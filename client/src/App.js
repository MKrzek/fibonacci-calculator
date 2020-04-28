import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import OtherPage from './OtherPage';
import Fib from './Fib'

function App() {
  return (
    <Router>
    <div className="App">
    <h1>Fib Calculator</h1>
      <header>
        <Link to='/'>Home</Link>{' '}
        <Link to='/otherpage'>Other Page</Link>
      </header >
       <div>
          <Route exact path="/" component={Fib}/>
          <Router path="/otherpage" component={OtherPage}/>
        </div>
    </div>
    </Router>
  );
}

export default App;
