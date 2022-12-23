import React from 'react';
import PlacesMapper from "../BusinessMapper/PlacesMapper/PlacesMapper"

const BusinessMapper = ({businesses}) => {
    return (
        <div>
            {console.log(businesses)}

            {businesses.map((business, index) => {
            return (
                <PlacesMapper key={index} places={business.local_results.places} />
            )
        })}
        
        </div>
    )
}

export default BusinessMapper