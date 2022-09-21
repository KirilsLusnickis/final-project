import './App.css';
import React  from 'react';
import TopBar from './Components/topBar/TopBar';
import {BrowserRouter as Router, Route,} from "react-router-dom"

function App() {
  return (
    <Router>
    <TopBar/>
      <Router>
        <Route path="/"/>
             
      </Router>
    </Router>
  );
}

export default App;
