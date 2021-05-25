import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/home.component';
import Nav from './components/nav.component';


function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Nav/>
          <div className="auth-wrapper">
          <div className="auth-inner">
            
            <Home/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
