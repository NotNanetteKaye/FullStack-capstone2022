import React from 'react';

const BusinessPresenter = ({business}) => {
    
    return (
        <div>
            {business.map(e => e.title)}
            {business.map(e => e.type)}
            {business.map(e => e.hours)}
        </div>
    )
}

export default BusinessPresenter