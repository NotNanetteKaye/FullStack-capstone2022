import React from 'react';
import FaveEventPresenter from '../FaveEventPresenter/FaveEventPresenter';

export default function FaveEventsMapper(props) {

    const {faveEvents, events} = props


    if (events.length > 0) {
        return (
            events.map((event, index) => {
                return (
                    <div>
                        <FaveEventPresenter key={event.id} event={event}/>
                    </div>
                )
            })
        )
    } else {
        return (
            <h3>No saved events</h3>
        )
    }
}