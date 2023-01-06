import React from 'react';
import axios from 'axios'
import useAuth from '../../hooks/useAuth';
import '../EventsPresenter/EventsPresenter.css'

const EventsPresenter = ({event, title, when, address, description, image, link}) => {

    const [user, token] = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newFaveEvent = {
           title: `${title ? (
            title
        ) : (
            'Unknown title of event.'
        )}`,
           when: `${when ? (
            when
        ) : (
            'Unknown date of event'
        )}`,
           address: `${address ? (
            address
        ) : (
            'Unknown address of event.'
        )}`,
           description: `${description ? (
            description
        ) : (
            'Unknown description of event.'
        )}`,
           image: `${image ? (
            image
        ) : (
            'Unknown image event.'
        )}`,
           link: `${link ? (
            link
        ) : (
            'Unknown link to event'
        )}`,
           user_id: `${user.id}`,
        }
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/upcoming_events/', 
            newFaveEvent, 
            {
                headers: {Authorization: "Bearer " + token},
            }
        );
        if (response.status === 201) {
            alert("Successfully saved event!")
        }
        console.log(newFaveEvent)
        } catch (error) {
            console.log(error.response);
            alert("Need to be logged in order to save");
        }
    }

    return (
        <div className='events'>
            <form onSubmit={handleSubmit}>
                <img src={event.image} alt=''/>
                <h1 className='eventsbusiness'>{event.title}</h1>
                <p>{event.date.when}</p>
                <p>{event.address[0]}</p>
                <p>{event.description}</p>
                <p>{event.link}</p>
                <button type='submit' className='eventsbusiness'>Save me to your faves!</button>
                {user ? (
                    <p></p>
                ) : (
                    <h5>MUST BE LOGGED IN ORDER TO SAVE</h5>
                )}
            </form>
        </div>
    )
}

export default EventsPresenter
