import React from 'react';
import FaveArtistPresenter from '../FaveArtistPresenter/FaveArtistPresenter'
import ArtistPresenter from '../ArtistPresenter/ArtistPresenter';
 
export default function FaveArtistsMapper(props) {
    
    const {faveArtists, artists} = props;


    if (artists.length > 0) {
        return (
            artists.map((artist, index) => {
                return (
                    <div>
                        <FaveArtistPresenter key={artist.index} artist={artist} name={artist.artist_name} id={artist.id} pic={artist.image}/>
                    </div>
                )
            })
        )
    } else {
        return(
            <h3>No saved artists</h3>
        )
    }
}

