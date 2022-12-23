import axios from "axios"
import React, { useState } from 'react';
import useAuth from "../../hooks/useAuth"

const BusinessPresenter = ({place, title, type, address, thumbnail, hours}) => {

    const [user, token] = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newFaveBusiness = {
            title: title ,
            type: type ,
            address: address ,
            thumbnail: thumbnail ,
            link: hours,
            user_id: 1 ,
        };
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/businesses/', 
            newFaveBusiness, 
            {
                headers: {Authorization: "Bearer " + token},
            }
        );
        if (response.status == 201) {
            alert("Successfully favorited a new artist!")
        }
        console.log(newFaveBusiness);
        } catch (error) {
         console.log(error.response);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>{place.title}</h1>
                <p>{place.type}</p>
                <p>{place.hours}</p>
                <p>{place.address}</p>
                <img src={place.thumbnail} alt=''/>
                <button type='submit'>Save me to your faves!</button>
            </form>
        </div>
    )
}

export default BusinessPresenter