import React from 'react';
import BusinessPresenter from '../BusinessPresenter/BusinessPresenter';

const BusinessMapper = ({businesses}) => {
    return (
        <div>
            {businesses.map(business => <BusinessPresenter key={business.local_results.places.map((business, index) => console.log(index))} business={business.local_results.places}/>)}
        </div>
    )
}

export default BusinessMapper