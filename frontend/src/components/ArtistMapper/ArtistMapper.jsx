import React from 'react';
import ArtistPresenter from "../ArtistPresenter/ArtistPresenter"

const ArtistMapper = ({artists}) => {
    return (
        <div>
            {artists.map(e => <ArtistPresenter key={e.id} artist={e} spotify_id={e.id}
            img={e.images[0]?.url} artist_name={e.name} genre={e.genres}/>)}
        </div>
    );
}

export default ArtistMapper