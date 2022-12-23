import React from 'react';

const EventsPresenter = ({results}) => {
    return (
        <div>
            {results.map((event, index) => {
                return (
                    <div key={index}>
                        <h1>{event.title}</h1>
                        <p>{event.date.when}</p>
                        <p>{event.link}</p>
                        <p>{event.description}</p>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default EventsPresenter
