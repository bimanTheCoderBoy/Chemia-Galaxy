import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './navbar';
import Footer from './footer';
import Card from './card';
import About from './about';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Procedure from './procedure';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
    <Navbar/>
      <Switch>
        <Route path="/procedure">
          <Procedure />
        </Route>
        
        <Route path="/">
        <Card/>
  <About/>
        </Route>

      </Switch>
      <Footer/>
    </Router>

    
  
 
   
   
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
