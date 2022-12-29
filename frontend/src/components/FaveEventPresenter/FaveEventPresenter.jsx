import React, { useImperativeHandle } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

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
            {props.name}
            <button>Delete.</button>
        </form>
    </div> );
}
 
export default FaveEventPresenter;