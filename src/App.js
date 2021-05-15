import React from 'react';
import Header from './components/Header';
import Feature from './components/Feature';
import About from './components/About';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About title="Light Fast & Powerful" button="Subscribe" />
    </div>
  );
};
export default App;
