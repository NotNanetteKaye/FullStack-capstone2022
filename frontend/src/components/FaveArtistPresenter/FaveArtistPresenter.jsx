import React from "react";
import axios from "axios";

const ArtistPresenter = (props) => {


    return ( 
        <div>
            {props.name}
            <button>Delete</button>
        </div>
     );
}
 
export default ArtistPresenter;