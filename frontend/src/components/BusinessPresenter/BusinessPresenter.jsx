import axios from "axios"
import React, { useState } from 'react';
import useAuth from "../../hooks/useAuth"
import './BusinessPresenter.css';

const BusinessPresenter = ({place, title, type, address, thumbnail, hours}) => {

    const [user, token] = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newFaveBusiness = {
            title: `${title ? (
                title
            ) : (
                'Unknown business name.'
            )}` ,
            type: `${type ? (
                type
            ) : (
                'Unknown type.'
            )}` ,
            address: `${address ? (
                address
            ) : (
                'Unknown address.'
            )}` ,
            thumbnail: `${thumbnail ? (
                thumbnail
            ) : (
                'thumbnail'
            )}` ,
            link: `${hours ? (
                hours
            ) : (
                'Unknown hours.'
            )}`,
            user_id: `${user.id}` ,
        };
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/businesses/', 
            newFaveBusiness, 
            {
                headers: {Authorization: "Bearer " + token},
            }
        );
        if (response.status === 201) {
            alert("Successfully saved business!")
        }
        console.log(newFaveBusiness);
        } catch (error) {
         console.log(error.response);
         alert("Need to be logged in order to save");
        }
    }
    return (
        <div className="business">
            <form onSubmit={handleSubmit}>
                <img src={place.thumbnail} alt='' height='150px' width='200px'/>
                <h1 className="specificbusiness">{place.title}</h1>
                <p>Business Type: {place.type}</p>
                <p>{place.hours}</p>
                <p>{place.address}</p>
                <button type='submit' className="specificbusiness">Save me to your faves!</button>
                {user ? (
                    <p></p>
                ) : (
                    <h5>MUST BE LOGGED IN ORDER TO SAVE</h5>
                )}
            </form>
        </div>
    )
}

export default BusinessPresenter