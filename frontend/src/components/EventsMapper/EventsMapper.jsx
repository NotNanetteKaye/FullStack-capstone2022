import React from 'react';
import EventsPresenter from '../EventsPresenter/EventsPresenter';

const EventsMapper = ({events}) => {
    return (
        <div>
            {events.map(e=> <EventsPresenter key={e.id} event={e}/>)}
        </div>
    )
}

export default EventsMapper