import React from 'react';

const EventsPresenter = ({event}) => {
    return (
        <div>
            {event.map(e => e.title)}
            {event.map(e => e.description)}
            {event.map(e => e.link)}
        </div>
    )
}

export default EventsPresenter
