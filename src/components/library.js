import React from "react";

import LibrarySongs from "./librarySongs";

const Library =({songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus })=>{

    return(
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div >
                {songs.map( song =>
                    <LibrarySongs  
                    audioRef={audioRef}
                    id={song.id} 
                    key={song.id} 
                    songs={songs} 
                    setCurrentSong ={setCurrentSong}
                    isPlaying={isPlaying}
                    song={song } 
                    setSongs={setSongs}/>
                    )}

            </div>
        </div>
    )
}

export default Library