import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {Header} from './components/Header/Header';
import {Section} from './components/Section/Section';
import {GlobalContext} from './components/Context/GlobalContext';
import {Details} from './components/Pages/Details'

function App() {
  return (
    <GlobalContext>
      <div className="App">
        <Router>
          <Header />
          <Section />
        </Router>
      </div>
    </GlobalContext>
  );
}

export default App;
