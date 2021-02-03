import React from 'react'

import './App.css';
import { Router, Route } from "react-router";
import CarouselPage from './components/CarouselPage';
import FixedNavbarExample from './components/FixedNavbarExample';
import Home from './pages/Home'
import Features from './pages/Features'

function App() {
  return (
      <>
      <Router>
        <FixedNavbarExample />
        <CarouselPage />
        <Route exact path='/' component={Home}/>
        <Route  path='/Features' component={Features}/>
      </Router>
      </>
  );
}

export default App;
