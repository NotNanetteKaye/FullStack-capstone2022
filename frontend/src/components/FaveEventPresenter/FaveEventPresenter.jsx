import React, { useImperativeHandle } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import '../FaveArtistPresenter/FaveArtistPresenter.css'

const FaveEventPresenter = (props) => {
    const [user, token] = useAuth('')

    const DeleteFaveEvent = async (e) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/api/upcoming_events/${props.id}/`,
            {
                headers: {Authorization: 'Bearer ' + token}
            })
        } catch (error) {
            console.log(error.data)
        }
    }

    return ( 
    <div>
        <form onSubmit={DeleteFaveEvent}>
            <h3>{props.name}</h3>
            <button>Delete.</button>
        </form>
    </div> );
}
 
export default FaveEventPresenter;