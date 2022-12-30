import React from 'react';
import FaveBusinessPresenter from '../FaveBusinessPresenter/FaveBusinessPresenter';

export default function FaveBusinessesMapper(props) {

    const {faveBusinesses, businesses} = props

    if (businesses.length > 0) {
        return (
            businesses.map((business, index) => {
                return (
                    <div>
                        <FaveBusinessPresenter key={business.index} id={business.id} name={business.title} />
                    </div>
                )
            })
        )
    } else {
        return (
            <h3>No saved businesses.</h3>
        )
    }

}