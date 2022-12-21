import React from 'react';
import EventsPresenter from '../EventsPresenter/EventsPresenter';

const EventsMapper = ({events}) => {
    return (
        <div>
            {events.map(e=> <EventsPresenter key={e.events_results.map((e, index) => console.log(index))} event={e.events_results}/>)}
        </div>
    )
}

export default EventsMapper