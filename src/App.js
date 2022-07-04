
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React,{useState, useEffect, useReducer, useCallback} from 'react';

import './styles/app.scss'
import Player from './components/player';
import Songs from './components/songs';

import Library from './components/library';
import data from './util';



function App()
{   


  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)

     return(
        <div >
          <Songs  currentSong={currentSong} />
          <Player 
           setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}  currentSong={currentSong}/>
          <Library songs={songs} />
          
        </div>
          
     )
}

export default App;



