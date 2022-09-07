
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter,Switch,Route} from "react-router-dom";

const App =()=>  {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API
  
    return (
      <div> 
        <BrowserRouter>
          <Navbar/>
          <Switch>
          <Route exact path="/"><News key="general" apiKey={apiKey} pageSize={pageSize} country="in" category="general"/></Route>
          <Route exact path="/business"><News key="business" apiKey={apiKey} pageSize={pageSize} country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News key="entertainment" apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment"/></Route>
          <Route exact path="/general"><News key="general" apiKey={apiKey} pageSize={pageSize} country="in" category="general"/></Route>
          <Route exact path="/health"><News key="health" apiKey={apiKey} pageSize={pageSize} country="in" category="health"/></Route>
          <Route exact path="/science"><News key="science" apiKey={apiKey} pageSize={pageSize} country="in" category="science"/></Route>
          <Route exact path="/sports"><News key="sports" apiKey={apiKey}  pageSize={pageSize} country="in" category="sports"/></Route>
          <Route exact path="/technology"><News key="technology" apiKey={apiKey} pageSize={pageSize} country="in" category="technology"/></Route>

        </Switch>
        </BrowserRouter>
      </div>
    )
  
}

export default App;
