import React from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import '../FaveArtistPresenter/FaveArtistPresenter.css'

const ArtistPresenter = (props) => {
    const [user, token] = useAuth();

    const DeleteFave = async (e) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/api/artists/${props.id}/`,
            {
                headers: {Authorization: 'Bearer ' + token},
            });
        } catch (error) {
            console.log(error.data)
        } 
    }


    return ( 
        <div>
            <form onSubmit={DeleteFave}>
                <h3>{props.name}</h3>
                <div className="faveDiv">
                    <button>Delete.</button>
                </div>
            </form>
        </div>
     );
}
 
export default ArtistPresenter;