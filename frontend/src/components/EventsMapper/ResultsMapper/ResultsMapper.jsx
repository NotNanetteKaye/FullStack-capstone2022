import React from 'react';
import EventsPresenter from '../../EventsPresenter/EventsPresenter';

const ResultsMapper = ({results}) => {
    return(
        <div>
            {results.map((event, index) => {
                return (
                    <EventsPresenter  key={index} event={event} title={event.title} when={event.date.when} address={event.address[0]} description={event.description} image={event.image} link={event.link}/>
                )
            })}
        </div>
    )
}

export default ResultsMapper