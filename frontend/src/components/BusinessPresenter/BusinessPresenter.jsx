import React from 'react';

const BusinessPresenter = ({business}) => {
    return (
        <div>
            <h1>{business.local_results.places.title}</h1>
        </div>
    )
}

export default BusinessPresenter