import React, { useImperativeHandle } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const FaveEventPresenter = (props) => {
    const [user, token] = useAuth('')

    const DeleteFaveEvent = async (e) => {
        try {
            const response = await axios.delete(``,
            {
                headers: {Authorization: 'Bearer ' + token}
            })
        } catch (error) {
            console.log(error.data)
        }
    }

    return ( 
    <div>
        {props.name}
    </div> );
}
 
export default FaveEventPresenter;