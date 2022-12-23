import axios from "axios"
import React, { useState } from 'react';
import useAuth from "../../hooks/useAuth"

const ArtistPresenter = ({artist, spotify_id, img, artist_name, genre}) => {
    const [user, token] = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newFaveArtist = {
            spotify_id: '1' ,
            image: 'img' ,
            artist_name: 'nan' ,
            genre: 'genre' ,
            URI: 'URI',
            user_id: 1 ,
        };
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/artists/', 
            newFaveArtist, 
            {
                headers: {Authorization: "Bearer " + token},
            }
        );
        https://github.com/NotNanetteKaye/youtube-clone.git
        console.log(newFaveArtist);
        } catch (error) {
         console.log(error.response);
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <img src={artist.images[0]?.url} height={artist.images.height} width={artist.images.width} alt=''/>
                <h1>{artist.name}</h1>
                <p>Genre(s): {artist.genres}</p>
                <p>Popularity: {artist.popularity}</p>
                <p>{artist.external_urls.spotify}</p>
                <button type='submit'>Save me to your faves! </button>
            </form>
        </div>
    )
}

export default ArtistPresenter