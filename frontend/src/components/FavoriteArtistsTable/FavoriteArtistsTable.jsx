import React from 'react';
 
export default function FavoriteArtistsTable(props) {
    
    const {faveArtists, artists} = props;

    if (artists.length > 0) {
        return (
            artists.map((artist, index) => {
                console.log(artist);
                return (
                    <div key={artist.id}>
                        <h3>{artist.artist_name}</h3>
                        <button>Delete</button>
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