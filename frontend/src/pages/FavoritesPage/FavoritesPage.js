import React, { useEffect, useState } from 'react';
import axios from "axios"
import useAuth from "../../hooks/useAuth"

const FavoritesPage = () => {
    const [user, token] = useAuth();
    const [artists, getArtists] = useState('')

    const getAllArtists = () => {
        axios.get(`http://127.0.0.1:8000/api/artists/${user}/`,
        {
            headers: {Authorization: "Bearer " + token},
        }).then ((response) => {
            const allArtists = response.data;
            getArtists(allArtists)
        })
        .catch(error => console.log(error.response.data))
    }

    useEffect(() => {
        getAllArtists();
    }, [])

    return (
        <div>
            <FavoriteArtistsTable favoriteArtists = {artists} />
        </div>
    )
}

export default FavoritesPage