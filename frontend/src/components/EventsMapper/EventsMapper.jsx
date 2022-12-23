import React from 'react';
import EventsPresenter from '../EventsPresenter/EventsPresenter';

const EventsMapper = ({events}) => {
    return (
        <div>
            {events.map((results, index) => {
                return (
                    <EventsPresenter key={index} results={results.events_results} />
                )
            })}
        </div>
    )
}

export default EventsMapper