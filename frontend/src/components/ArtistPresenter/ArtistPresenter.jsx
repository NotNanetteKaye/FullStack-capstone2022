import axios from "axios"
import React, { useState } from 'react';
import useAuth from "../../hooks/useAuth"

const ArtistPresenter = ({artist}) => {

    const [faveArtist, setFaveArtist] = useState([])
    const [user, token] = useAuth();

    async function saveFavoriteArtist() {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/artists/1/', {
                headers: {Authorization: "Bearer " + token},
            });
            if (response.status == 200) {
                alert("Successfully favorited a new artist!")
            }
            setFaveArtist(response.data)
        } catch (error) {
            console.log(error.response);
        }
    }


    return (
        <div>
            <img src={artist.images[0]?.url} height={artist.images.height} width={artist.images.width} alt=''/>
            <h1>{artist.name}</h1>
            <p>Genre(s): {artist.genres}</p>
            <p>Popularity: {artist.popularity}</p>
            <p>{artist.external_urls.spotify}</p>
            <button onClick={() => saveFavoriteArtist()}>Save me to your faves! </button>

        </div>
    )
}

export default ArtistPresenter