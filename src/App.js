import React from 'react';
import logo from './logo.svg';
import './App.css';


import Header from './components/graphics/Header'
import Graphics from './components/graphics/Graphics'
import Playlist from './components/playlist/Playlist'
import Actions from './components/playlist/Actions'
import Controls from './components/Controls'

import PlayerState from './Reducers/PlayerState'

function App() {

  return (
    <PlayerState>
      <div className="main">
        <div className="top">
          <div className="left">
            
            <Graphics />
          </div>
          <div className="right">
            <Actions />
            <Playlist />
          </div>
        </div>
        <Controls />
      </div>
      <Header />
    </PlayerState>
  );
}

export default App;
