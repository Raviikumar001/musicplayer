import React from "react";

const LibrarySongs = ({song})=>{

    return (
            <div className= "library-song">
              <img alt ={song.name}src={song.cover}></img>
              <h3>{song.name}</h3>
              <h4>{song.artist}</h4>
            </div>
    )
}


export default LibrarySongs