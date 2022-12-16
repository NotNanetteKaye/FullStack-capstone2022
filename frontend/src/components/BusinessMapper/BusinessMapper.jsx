import React from 'react';

const BusinessMapper = ({businesses}) => {
    return (
        <div>
            {businesses.map(e => <BusinessPresenter key={e.id} business={e}/>)}
        </div>
    )
}

export default BusinessMapper