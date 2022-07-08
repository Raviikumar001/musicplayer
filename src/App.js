
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React,{useState, useEffect, useReducer, useCallback, useRef} from 'react';

import './styles/app.scss'
import Player from './components/player';
import Songs from './components/songs';

import Library from './components/library';
import data from './data';
import Nav from './components/Nav';

function App()
{   

  const [libraryStatus, setLibraryStatus] = useState(false);

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef= useRef(null)

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration :0
})

const timeUpdateHandler = (e)=>{
  const current = e.target.currentTime
  const duration = e.target.duration
  setSongInfo({...songInfo, currentTime:current, duration})

}

  const songEndHandler = async ()=>{
    let currentIndex = songs.findIndex( (song)=> song.id ===  currentSong.id)
    await setCurrentSong( songs[(currentIndex + 1) % songs.length])
    if(isPlaying) audioRef.current.play()
  

  }

     return(
        <div className={`App ${libraryStatus ? 'library-active': ""}`}>
          <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
          <Songs  currentSong={currentSong} />
          <Player 
          setSongs={setSongs}
          songs={songs}
          setCurrentSong={setCurrentSong}
          audioRef={audioRef}
          setSongInfo={setSongInfo}
           setIsPlaying={setIsPlaying}
           songInfo={songInfo}
          isPlaying={isPlaying}  currentSong={currentSong}/>
          <Library
          libraryStatus={libraryStatus}
          isPlaying={isPlaying} 
          setSongs={setSongs}
          audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} />
          <audio  onEnded={songEndHandler} onLoadedMetadata={timeUpdateHandler} onTimeUpdate ={timeUpdateHandler} ref={audioRef}src={currentSong.audio}></audio>    
          
        </div>
          
     )
}

export default App;



