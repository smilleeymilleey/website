import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactPage from './components/pages/ContactPage.js';
import Blog from './components/pages/Blog';



function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
         
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/blog' component={Blog} />
          <Route path='/contactpage' component={ContactPage} />

        </Switch>
      </Router>





    </>
  );
}

export default App;
