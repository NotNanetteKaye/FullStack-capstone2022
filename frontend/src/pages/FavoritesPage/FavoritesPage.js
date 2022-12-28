import React, { useEffect, useState } from 'react';
import axios from "axios"
import useAuth from "../../hooks/useAuth"
import FavoriteArtistsTable from '../../components/FavoriteArtistsTable/FavoriteArtistsTable';

const FavoritesPage = () => {
    const [user, token] = useAuth();
    const [artists, getArtists] = useState('')

    const getAllArtists = async () => {
        try {
            let response = await axios.get('http://127.0.0.1:8000/api/artists/', 
            {
                headers: {Authorization: "Bearer " + token},
            });
            getArtists(response.data);
    } catch (error) {
        console.log(error.message)
    }
    }

    useEffect(() => {
        getAllArtists();
    }, [])

    return (
        <div>
            <FavoriteArtistsTable artists={artists} />
        </div>
    )
}

export default FavoritesPage;