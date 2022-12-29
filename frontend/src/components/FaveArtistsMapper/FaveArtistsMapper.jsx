import React from 'react';
import FaveArtistPresenter from '../FaveArtistPresenter/FaveArtistPresenter'
 
export default function FaveArtistsMapper(props) {
    
    const {faveArtists, artists} = props;


    if (artists.length > 0) {
        return (
            artists.map((artist, index) => {
                return (
                    <div>
                        <FaveArtistPresenter key={artist.id} artist={artist} name={artist.artist_name} id={artist.id}/>
                    </div>
                )
            })
        )
    } else {
        return(
            <h3>No fave artists</h3>
        )
    }
}

