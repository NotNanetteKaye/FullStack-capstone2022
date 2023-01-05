import axios from "axios"
import React, { useState } from 'react';
import useAuth from "../../hooks/useAuth";
import '../ArtistPresenter/ArtistPresenter.css';

const ArtistPresenter = ({artist, spotify_id, img, artist_name, genre, link}) => {
    const [user, token] = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newFaveArtist = {
            spotify_id: spotify_id ,
            image: img ,
            artist_name: artist_name ,
            genre: genre,
            URI: link,
            user_id: `${user.id}` ,
        };
        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/artists/`, 
            newFaveArtist, 
            {
                headers: {Authorization: "Bearer " + token},
            }
        );
        if (response.status == 201) {
            alert("Successfully favorited a new artist!")
        }
        console.log(newFaveArtist);
        } catch (error) {
         console.log(error.response);
         alert("Need to be logged in order to save");
        }
    }


    return (
        <div className='artist'>
            <form onSubmit={handleSubmit}>
                <img src={artist.images[0]?.url} height='300px' width='320px' alt=''/>
                <h1>{artist.name}</h1>
                <p>Genre(s): {artist.genres}</p>
                <p>Popularity: {artist.popularity}</p>
                <p>{artist.external_urls.spotify}</p>
                <button type='submit'>Save me to your faves! </button>
                {user ? (
                    <p></p>
                ) : (
                    <h5>MUST BE LOGGED IN ORDER TO SAVE</h5>
                )}
            </form>
        </div>
    )
}

export default ArtistPresenter