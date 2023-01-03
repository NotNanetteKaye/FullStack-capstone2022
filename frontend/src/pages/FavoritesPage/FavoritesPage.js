import React, { useEffect, useState } from 'react';
import axios from "axios"
import useAuth from "../../hooks/useAuth"
import FaveArtistsMapper from '../../components/FaveArtistsMapper/FaveArtistsMapper';
import FaveEventsMapper from '../../components/FaveEventsMapper/FaveEventsMapper';
import FaveBusinessesMapper from '../../components/FaveBusinessesMapper/FaveBusinessesMapper';
import '../FavoritesPage/FavoritesPage.css'

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
        <div className='favoritespage'>
            <h1 className='header'>{user.username}'s FAVORITES!</h1>
            <h2 className='header'>Find all your favorites below.</h2>
            <div className='faves'>
                <div className='left'>
                    <h1>MUSIC</h1>
                    <div className='mapper'>
                        <FaveArtistsMapper artists={artists}/>
                    </div>
                </div>
                <div className='middle'>
                    <h1>EVENTS</h1>
                    <div className='mapper'>
                        <FaveEventsMapper events={events} />
                    </div>
                </div>
                <div className='right'>
                    <h1>BUSINESSES</h1>
                    <div className='mapper'>
                        <FaveBusinessesMapper businesses={businesses} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavoritesPage;