import React from "react";
import './App.css'

import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import CV from './Pages/CV';

import Nav from './Components/Nav/Nav'


import {
  Switch,
  Route
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
      <div className='appContainer'>
          
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        
        
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/cv">
              <CV />
            </Route>
          </Switch>
        </div>

        <div className='navContainer'>
          <Nav />
        </div>
      </div>

  );
}


