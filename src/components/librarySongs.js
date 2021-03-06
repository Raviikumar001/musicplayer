import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";
import React from "react";
// import { playAudio } from "../util";

const LibrarySongs = ({song, songs, setCurrentSong, id,audioRef, isPlaying, setSongs})=>{

  const songSelectHandler = async()=>{
    const selectedSong = songs.filter(  (state) => state.id === id)
   await setCurrentSong(selectedSong[0])
    
    const newSongs = songs.map( (song) => {
      if(song .id === id){
        return{
          ...song,
          active: true,
        }
      }else{
        return{
          ...song,
          active: false,
        }
      }
    })

    setSongs(newSongs)
    // audioRef.current.play();

    // if(isPlaying)
    // {
    //    const playPromise = audioRef.current.play();
    //    if(playPromise != undefined){
    //     playPromise.then( (audio) =>{
    //       audioRef.current.play();
    //     })
    //    }
    // }

    // playAudio(isPlaying, audioRef)
    if(isPlaying) audioRef.current.play()
  }

    return (
            <div onClick={songSelectHandler} className= {`library-song ${song.active ? 'selected': ''}`}>
              <img alt ={song.name}src={song.cover}></img>
              <div className="song-description">
              <h3>{song.name}</h3>
              <h4>{song.artist}</h4>
              </div>
             
            </div>
    )
}


export default LibrarySongs