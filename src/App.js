import React from 'react';
import './App.css';
import HomeContainer from './Containers/HomeContainer'
import HeaderComponents from './Containers/HeaderComponent'
import Profile from './Profile/Profile';
Profile
function App() {
  return (
    <div className="App">
      <HeaderComponents />
     
      <HomeContainer />
      <Profile/>
    </div>
  );
}

export default App;