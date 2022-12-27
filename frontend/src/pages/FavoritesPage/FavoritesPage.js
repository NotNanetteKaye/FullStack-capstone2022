import React, { useEffect, useState } from 'react';
import axios from "axios"
import useAuth from "../../hooks/useAuth"

const FavoritesPage = () => {
    const [faveArtists, setFaveArtists] = useState([]);
    const [user, token] = useAuth();

    useEffect(() => {
        GetAllFaveArtists();
    }, []);

    async function GetAllFaveArtists() {
        try {
            let response = await axios.get(`http://127.0.0.1:8000/api/artists/${user}/`,
            {
                headers: {Authorization: "Bearer " + token},
            });
            setFaveArtists(response.data);
        } catch (error) {
            console.log(error.response.data)
        }
    }


    return (
        <div>
        </div>
    )
}

export default FavoritesPage