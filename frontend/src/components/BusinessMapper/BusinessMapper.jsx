import React from 'react';
import BusinessPresenter from '../BusinessPresenter/BusinessPresenter';

const BusinessMapper = ({businesses}) => {
    return (
        <div>
            {businesses.map(e => <BusinessPresenter key={e.local_results.places.place_id} business={e}/>)}
        </div>
    )
}

export default BusinessMapper