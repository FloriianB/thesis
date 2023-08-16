import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Overview from './Overview';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="Overview" exact component={Overview} />
        {/* Füge hier weitere Routen für andere Seiten hinzu, falls erforderlich */}
      </Switch>
    </Router>
  );
};

export default App;
