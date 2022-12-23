import React from 'react';
import ResultsMapper from './ResultsMapper/ResultsMapper';

const EventsMapper = ({events}) => {
    return (
        <div>
            {events.map((results, index) => {
                return (
                    <ResultsMapper key={index} results={results.events_results} />
                )
            })}
        </div>
    )
}

export default EventsMapper