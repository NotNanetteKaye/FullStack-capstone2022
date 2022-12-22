import React from 'react';
import BusinessPresenter from '../BusinessPresenter/BusinessPresenter';

const BusinessMapper = ({businesses}) => {
    return (
        <div>
            {console.log(businesses)}

            {businesses.map((business, index) => {
            return (
                <BusinessPresenter key={index} places={business.local_results.places} />
            )
        })}
        
        </div>
    )
}

export default BusinessMapper