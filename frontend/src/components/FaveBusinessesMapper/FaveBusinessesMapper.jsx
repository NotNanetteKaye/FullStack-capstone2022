import React from 'react';

export default function FaveBusinessesMapper(props) {

    const {faveBusinesses, businesses} = props

    if (businesses.length > 0) {
        return (
            businesses.map((business, index) => {
                return (
                    <div>
                        <FaveBusinessPresenter key={business.index} id={business.id} name={business.name} />
                    </div>
                )
            })
        )
    }

}