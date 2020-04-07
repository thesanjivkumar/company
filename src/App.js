import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Service from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog'
import Contact from './components/Contact';



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Service} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/blog' component={Blog} />
          <Route path='/contact' component={Contact} />

         
          
        
      </Router>
    </div>
  );
}

export default App;
