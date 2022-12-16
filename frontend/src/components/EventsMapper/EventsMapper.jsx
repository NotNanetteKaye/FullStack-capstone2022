import React from 'react';

const EventsMapper = ({events}) => {
    return (
        <div>
            {events.map(e=> <EventPresenter key={e.id} event={e}/>)}
        </div>
    )
}

export default EventsMapper