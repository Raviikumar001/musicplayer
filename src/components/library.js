import React from "react";

import LibrarySongs from "./librarySongs";

const Library =({songs, setCurrentSong })=>{

    return(
        <div className="library">
            <h2>Library</h2>
            <div >
                {songs.map( song =>
                    <LibrarySongs  id={song.id} key={song.id} songs={songs} setCurrentSong ={setCurrentSong}song={song } />
                    )}

            </div>
        </div>
    )
}

export default Library