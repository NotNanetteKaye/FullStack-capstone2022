import React from 'react';
import EventsPresenter from '../EventsPresenter/EventsPresenter';

const EventsMapper = ({events}) => {
    return (
        <div>
            {events.map((event, index) => {
                return (
                    <EventsPresenter key={index} event={event.events_results} />
                )
            })}
        </div>
    )
}

export default EventsMapper