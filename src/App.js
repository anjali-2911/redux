import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeContainer from './Containers/HomeContainer'
import HeaderComponents from './Containers/HeaderComponent'
function App() {
  return (
    <div className="App">
      <HeaderComponents />
     
      <HomeContainer />
    </div>
  );
}

export default App;