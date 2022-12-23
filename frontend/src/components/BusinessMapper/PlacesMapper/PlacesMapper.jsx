import React from 'react';
import BusinessPresenter from '../../BusinessPresenter/BusinessPresenter'

const PlacesMapper = ({places}) => {
    return (
        <div>
            {places.map((place, index) => {
                return (
                    <BusinessPresenter key={index} place={place} />
                )
            })}
        </div>
    )
}

export default PlacesMapper