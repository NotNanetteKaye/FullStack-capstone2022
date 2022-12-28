import React from 'react';
import FaveArtistPresenter from '../FaveArtistPresenter/FaveArtistPresenter'
 
export default function FavoriteArtistsTable(props) {
    
    const {faveArtists, artists} = props;


    if (artists.length > 0) {
        return (
            artists.map((artist, index) => {
                return (
                    <FaveArtistPresenter key={artist.id} artist={artist} name={artist.artist_name}/>
                )
            })
        )
    } else {
        return(
            <h3>No fave artists</h3>
        )
    }
}

