import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/header/header';
import Home from './components/home/home';
import Expert from './components/expert/expert';

const App = () => {
  return (
    <Router>
      <div id="body">
        <Header />

        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/expert/:id?" component={Expert} />
        </div>
      </div>
    </Router>
  );
}

export default App;