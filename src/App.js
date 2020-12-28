import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';

import Blog from './components/pages/Blog';



function App() {

  return (
    <>
      <Router>
      <Navbar />
        <Switch>
     
          <Route exact path='/services' component={Services} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/blog' component={Blog} />
         

        </Switch>
      </Router>





    </>
  );
}

export default App;
