import React from 'react';

const BusinessPresenter = ({places}) => {
    
    return (
        <div>
            {console.log(places)}
            {places.map((place, index) => {
                return (
                    <div key={index}>
                        <h1>{place.title}</h1>
                        <p>{place.type}</p>
                        <p>{place.hours}</p>
                        <p>{place.address}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default BusinessPresenter