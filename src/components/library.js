import React from "react";

import LibrarySongs from "./librarySongs";

const Library =({songs})=>{

    return(
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                <LibrarySongs />

            </div>
        </div>
    )
}

export default Library