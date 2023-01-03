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
            console.log(error.data);
            alert("Need to be logged in order to save");
        } 
    }


    return ( 
        <div>
            <form onSubmit={DeleteFave} className='favePresenters'>
                <div className="together">
                    <div className="left">
                        <img src={props.pic} alt='' height='100mm' width='120mm'/>
                    </div>
                    <div className="title">
                        <h3>{props.name}</h3>
                    </div>
                    <div className="button">
                        <div className="faveDiv">
                            <button>Delete.</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default ArtistPresenter;