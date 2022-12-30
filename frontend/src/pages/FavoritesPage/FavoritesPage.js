import React, { useEffect, useState } from 'react';
import axios from "axios"
import useAuth from "../../hooks/useAuth"
import FaveArtistsMapper from '../../components/FaveArtistsMapper/FaveArtistsMapper';
import FaveEventsMapper from '../../components/FaveEventsMapper/FaveEventsMapper';
import FaveBusinessesMapper from '../../components/FaveBusinessesMapper/FaveBusinessesMapper';

const FavoritesPage = () => {
    const [user, token] = useAuth();
    const [artists, getArtists] = useState([]);
    const [events, getEvents] = useState([]);
    const [businesses, getBusinesses] = useState([]);

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

    const getAllBusinesses = async () => {
        try {
            let response = await axios.get('http://127.0.0.1:8000/api/businesses/',
            {
                headers: {Authorization: "Bearer " + token},
            });
            getBusinesses(response.data);
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getAllArtists();
        getAllEvents();
        getAllBusinesses();
    }, [])

    return (
        <div>
            <h1>MUSIC</h1>
            <FaveArtistsMapper artists={artists} />
            <h1>EVENTS</h1>
            <FaveEventsMapper events={events} />
            <h1>BUSINESSES</h1>
            <FaveBusinessesMapper businesses={businesses} />

        </div>
    )
}

export default FavoritesPage;