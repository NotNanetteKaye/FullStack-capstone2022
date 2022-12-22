import React from 'react';

const BusinessPresenter = ({places}) => {
    
    return (
        <div>
            {console.log(places)}
            {places.map((place, index) => {
                return (
                    <div key={index}>
                        <h1>{place.title}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default BusinessPresenter