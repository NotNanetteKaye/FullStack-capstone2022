import React, { useEffect, useState } from 'react';
import axios from "axios"
import useAuth from "../../hooks/useAuth"
import FaveArtistsMapper from '../../components/FaveArtistsMapper/FaveArtistsMapper';
import FaveEventsMapper from '../../components/FaveEventsMapper/FaveEventsMapper';

const FavoritesPage = () => {
    const [user, token] = useAuth();
    const [artists, getArtists] = useState([])
    const [events, getEvents] = useState([])

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

    const getAllEvents = async () => {
        try {
            let response = await axios.get('http://127.0.0.1:8000/api/upcoming_events/',
            {
                headers: {Authorization: "Bearer " + token},
            });
            getEvents(response.data);
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getAllArtists();
        getAllEvents();
    }, [])

    return (
        <div>
            <h1>MUSIC</h1>
            <FaveArtistsMapper artists={artists} deleteArtistData = {getArtists} />
            <FaveEventsMapper events={events} />
            <h1>EVENTS</h1>

        </div>
    )
}

export default FavoritesPage;