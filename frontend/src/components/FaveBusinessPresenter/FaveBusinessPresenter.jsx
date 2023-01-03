import React from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import '../FaveArtistPresenter/FaveArtistPresenter.css'

const FaveBusinessPresenter = (props) => {
    const [user, token] = useAuth('');

    const DeleteFaveBusiness = async (e) => {
        try{
            let response = await axios.delete(`http://127.0.0.1:8000/api/businesses/${props.id}/`,
            {
                headers: {Authorization: 'Bearer ' + token}
            });
        } catch (error) {
            console.log(error.data)
        }

    }

    return ( 
        <div>
            <form onSubmit={DeleteFaveBusiness}>
                <h3>{props.name}</h3>
                <button>Delete.</button>
            </form>
        </div>
     );
}
 
export default FaveBusinessPresenter;
