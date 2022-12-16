import React from 'react';
import ArtistPresenter from "../ArtistPresenter/ArtistPresenter"

const ArtistMapper = ({artists}) => {
    return (
        <div>
            {artists.map(e => <ArtistPresenter key={e.id} artist={e}/>)}
        </div>
    );
}

export default ArtistMapper