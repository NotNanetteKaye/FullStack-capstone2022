import React from 'react';

const EventsPresenter = ({event}) => {
    return (
        <div>
            {event.events_result}
        </div>
    )
}

export default EventsPresenter
